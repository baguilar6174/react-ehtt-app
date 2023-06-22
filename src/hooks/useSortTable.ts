import React from 'react';

export type configType<T> = {
	direction: 'asc' | 'desc';
	key: keyof T;
};

export const useSortableData = <T>(
	items: T[],
	config?: configType<T>
): {
	sortedItems: T[];
	requestSort: (key: keyof T) => void;
	sortConfig: configType<T> | undefined;
} => {
	const [sortConfig, setSortConfig] = React.useState<configType<T> | undefined>(config);

	const sortedItems = React.useMemo((): T[] => {
		const sortableItems = [...items];
		if (sortConfig) {
			sortableItems.sort((a, b): 1 | -1 | 0 => {
				if (a[sortConfig.key] < b[sortConfig.key]) {
					return sortConfig.direction === 'asc' ? -1 : 1;
				}
				if (a[sortConfig.key] > b[sortConfig.key]) {
					return sortConfig.direction === 'asc' ? 1 : -1;
				}
				return 0;
			});
		}
		return sortableItems;
	}, [items, sortConfig]);

	const requestSort = <K extends keyof T>(key: K): void => {
		let direction: 'asc' | 'desc' = 'asc';
		if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
			direction = 'desc';
		}
		setSortConfig({ key, direction });
	};

	return { sortedItems, requestSort, sortConfig };
};

import React from 'react';

export enum Direction {
	ascending = 'ascending',
	descending = 'descending'
}

type configType<T> = {
	direction: Direction;
	key: keyof T;
};

export const useSortableData = <T>(
	items: T[],
	config?: configType<T>
): {
	items: T[];
	requestSort: (key: keyof T) => void;
	sortConfig: configType<T> | undefined;
} => {
	const [sortConfig, setSortConfig] = React.useState<configType<T> | undefined>(config);

	const sortedItems = React.useMemo((): T[] => {
		const sortableItems = [...items];
		if (sortConfig !== undefined) {
			sortableItems.sort((a, b): 1 | -1 | 0 => {
				if (a[sortConfig.key] < b[sortConfig.key]) {
					return sortConfig.direction === Direction.ascending ? -1 : 1;
				}
				if (a[sortConfig.key] > b[sortConfig.key]) {
					return sortConfig.direction === Direction.ascending ? 1 : -1;
				}
				return 0;
			});
		}
		return sortableItems;
	}, [items, sortConfig]);

	const requestSort = <K extends keyof T>(key: K): void => {
		let direction: Direction = Direction.ascending;
		if (sortConfig && sortConfig.key === key && sortConfig.direction === Direction.ascending) {
			direction = Direction.descending;
		}
		setSortConfig({ key, direction });
	};

	return { items: sortedItems, requestSort, sortConfig };
};

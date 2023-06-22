import React from 'react';

export const useSearch = <T>(
	items: T[],
	excludeColumns?: (keyof T)[]
): {
	filteredItems: T[];
	requestSearch: (search: string) => void;
} => {
	const [search, setSearch] = React.useState<string>('');

	const filteredItems = React.useMemo((): T[] => {
		const filtered = [...items].filter((item: T): boolean | T => {
			if (search.toLowerCase().trim() === '') return item;
			return Object.keys(item as object).some((key): boolean | undefined => {
				if (excludeColumns && excludeColumns.includes(key as keyof T)) return false;
				return item[key as keyof T]?.toString().toLowerCase().includes(search);
			});
		});
		return filtered;
	}, [items, search]);

	const requestSearch = (search: string): void => {
		setSearch(search);
	};

	return { filteredItems, requestSearch };
};

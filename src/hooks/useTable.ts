import { useState, useEffect } from 'react';

const calculateRange = <T>(data: T[], rowsPerPage: number): number[] => {
	const range = [];
	const num = Math.ceil(data.length / rowsPerPage);
	for (let i = 1; i <= num; i++) {
		range.push(i);
	}
	return range;
};

const sliceData = <T>(data: T[], page: number, rowsPerPage: number): T[] => {
	return data.slice((page - 1) * rowsPerPage, page * rowsPerPage);
};

export const useTable = <T>(
	data: T[],
	page: number,
	rowsPerPage: number
): {
	slice: T[];
	range: number[];
} => {
	const [tableRange, setTableRange] = useState<number[]>([]);
	const [slice, setSlice] = useState<T[]>([]);

	useEffect((): void => {
		const range = calculateRange(data, rowsPerPage);
		setTableRange([...range]);

		const slice = sliceData(data, page, rowsPerPage);
		setSlice([...slice]);
	}, [data, setTableRange, page, setSlice]);

	return { slice, range: tableRange };
};

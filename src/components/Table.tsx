import React, { ReactElement, useState } from 'react';
import { Person } from '../data/mock/employees';
import { useSortableData } from '../hooks';

interface TableProps {
	data: Person[];
}

const excludeColumns: (keyof Person)[] = [];
const headers: Array<keyof Person> = ['companyLogo', 'name', 'company', 'category', 'happinessLevel'];

export const Table: React.FC<TableProps> = ({ data }: TableProps): ReactElement => {
	const { sortedItems, requestSort } = useSortableData(data, { direction: 'asc', key: 'name' });
	const [sortedData, setSortedData] = useState<Person[]>(data);
	const [searchText, setSearchText] = useState<string>('');
	const [currentPage, setCurrentPage] = useState<number>(1);
	const itemsPerPage = 5;

	const handleSort = (key: keyof Person): void => {
		requestSort(key);
		setSortedData(sortedItems);
	};

	/**
	 * Busca en la lista en función de todas las propiedades
	 * @param search Search param
	 */
	const handleSearch = (search: string): void => {
		const filtered = data.filter((item): boolean | Person => {
			if (search.toLowerCase().trim() === '') return item;
			return Object.keys(item).some((key): boolean | undefined =>
				excludeColumns.includes(key as keyof Person)
					? false
					: item[key as keyof Person]?.toString().toLowerCase().includes(search)
			);
		});
		setSearchText(search);
		setSortedData(filtered);
		setCurrentPage(1);
	};

	// Function to handle pagination
	const handlePageChange = (pageNumber: number): void => setCurrentPage(pageNumber);

	// Calculate the range of items to be displayed on the current page
	const startIndex = (currentPage - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;

	// Get the current page's data
	const paginatedData = sortedData.slice(startIndex, endIndex);

	return (
		<div>
			{/* Add sorting and searching controls */}
			<div>
				<input
					type="text"
					value={searchText}
					onChange={(e): void => handleSearch(e.target.value)}
					placeholder="Search by name"
					className="shadow appearance-none border rounded w-full p-3 mb-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
				/>
			</div>
			<table className="table-auto w-full shadow-lg bg-white">
				{/* Table header with sorting */}
				<thead>
					<tr className="text-left capitalize">
						{headers.map((header) => {
							return (
								<th
									className="hover:bg-gray-300 hover:cursor-pointer border p-4"
									key={header}
									onClick={(): void => handleSort(header)}
								>
									{header}
								</th>
							);
						})}
						<th className="hover:bg-gray-300 hover:cursor-pointer border p-4">Actions</th>
					</tr>
				</thead>
				{/* Table body */}
				<tbody>
					{/* Map over the paginated data */}
					{paginatedData.map((person) => (
						<tr className="hover:bg-gray-50 focus:bg-gray-300" key={`${person.name}`}>
							<td className="border text-center p-4">
								{person.companyLogo && <img width={32} height={32} src={person.companyLogo} alt={person.company} />}
							</td>
							<td className="text-base border text-left p-4">{person.name}</td>
							<td className="text-base border text-left p-4">{person.company}</td>
							<td className="text-base border text-left p-4">{person.category}</td>
							<td className="text-base border text-left p-4">{person.happinessLevel}</td>
							<td className="text-base border text-left p-4">
								<button className="inline-block text-sm px-4 py-2 leading-none border rounded text-gray-500 border-gray-500 hover:bg-gray-500 hover:text-white">
									Follow
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>

			{/* Pagination */}
			<div>
				{/* Generate page numbers */}
				{Array.from({ length: Math.ceil(sortedData.length / itemsPerPage) }, (_, index) => (
					<button className="p-4" key={index} onClick={(): void => handlePageChange(index + 1)}>
						{index + 1}
					</button>
				))}
			</div>
		</div>
	);
};

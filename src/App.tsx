import React from 'react';

import './App.scss';
// import { Modal } from './components';
import { DATA, Person } from './data/mock/employees';
import { useForm } from './hooks';
import { useSortableData } from './hooks/useSortTable';

const initialForm = {
	search: ''
};

const excludeColumns: (keyof Person)[] = [];

function App(): JSX.Element {
	// const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);

	const { form, onInputChange } = useForm(initialForm);
	const { search } = form;
	const { items, requestSort } = useSortableData<Person>(DATA);
	const [data, setData] = React.useState<Person[]>(items);

	React.useEffect(() => {
		const searched = items.filter((item): boolean | Person => {
			if (search.toLowerCase().trim() === '') return item;
			return Object.keys(item).some((key): boolean | undefined =>
				excludeColumns.includes(key as keyof Person)
					? false
					: item[key as keyof Person]?.toString().toLowerCase().includes(search)
			);
		});
		setData(searched);
	}, [search, items]);

	return (
		<main className="p-10">
			{/* <button onClick={toggleModal} className="" disabled={isModalOpen} aria-label="Open modal">
				Open modal
			</button>
			<Modal toggle={toggleModal} open={isModalOpen}>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis vitae eaque unde ut. Porro, nobis, veniam
					recusandae ut id fuga esse molestias non, incidunt sed nisi quisquam accusamus eos atque reprehenderit.
					Dolorum, incidunt perspiciatis quibusdam voluptatem atque ipsum recusandae ullam quasi ducimus cumque
					voluptatibus. Obcaecati tempore corporis rerum iure voluptates iste enim magni laborum molestiae, reiciendis
					quibusdam volu
				</p>
			</Modal> */}
			<input type="text" name="search" id="search" placeholder="Search" onChange={onInputChange} value={search} />
			<table className="table-auto w-full">
				<thead>
					<tr className="text-left text-dark/70 dark:text-light/60 capitalize">
						<th></th>
						<th>
							<button type="button" onClick={(): void => requestSort('name')}>
								Name
							</button>
						</th>
						<th>
							<button type="button" onClick={(): void => requestSort('company')}>
								Company
							</button>
						</th>
						<th>
							<button type="button" onClick={(): void => requestSort('category')}>
								Company
							</button>
						</th>
						<th>
							<button type="button" onClick={(): void => requestSort('happinessLevel')}>
								Company
							</button>
						</th>
					</tr>
				</thead>
				<tbody>
					{data.length === 0 && (
						<tr className="text-center">
							<td colSpan={5}>No results</td>
						</tr>
					)}
					{data.map((person) => (
						<tr key={`${person.name}`}>
							<td className="flex items-center">
								{person.companyLogo && <img src={person.companyLogo} alt={person.company} />}
							</td>
							<td className="text-base">{person.name}</td>
							<td className="text-base">{person.company}</td>
							<td className="text-base">{person.category}</td>
							<td className="text-base">{person.happinessLevel}</td>
						</tr>
					))}
				</tbody>
			</table>
		</main>
	);

	/* function toggleModal(): void {
		setIsModalOpen(!isModalOpen);
	} */
}

export default App;

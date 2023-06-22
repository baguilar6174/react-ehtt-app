import React from 'react';

import './App.scss';
import { DATA } from './data/mock/employees';
import { Header } from './components';
import { Table } from './components/Table';

function App(): JSX.Element {
	/* React.useEffect(() => {
		const searched = items.filter((item): boolean | Person => {
			if (search.toLowerCase().trim() === '') return item;
			return Object.keys(item).some((key): boolean | undefined =>
				excludeColumns.includes(key as keyof Person)
					? false
					: item[key as keyof Person]?.toString().toLowerCase().includes(search)
			);
		});
		const slice = sliceData(searched, page, rowsPerPage);
		const range = calculateRange(searched, rowsPerPage);
		setRange([...range]);
		setData([...slice]);
	}, [search, page]); */

	return (
		<>
			<Header />
			<main className="p-10">
				{/* <div className="flex justify-center mt-8">
					<div>
						{range.map((el, index) => (
							<button
								key={index}
								className={`p-4 ${page === el ? 'bg-gray-400' : 'border hover:bg-gray-200'}`}
								onClick={(): void => setPage(el)}
							>
								{el}
							</button>
						))}
					</div>
				</div> */}
				<Table data={DATA} />
			</main>
		</>
	);
}

export default App;

import './App.scss';
import { DATA } from './data/mock/employees';
import { Header } from './components';
import { Table } from './components/Table';

function App(): JSX.Element {
	return (
		<>
			<Header />
			<main className="p-10">
				<Table data={DATA} />
			</main>
		</>
	);
}

export default App;

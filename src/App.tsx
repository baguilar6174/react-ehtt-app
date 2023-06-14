import React from 'react';

import './App.scss';
import { Modal } from './components';

function App(): JSX.Element {
	const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);

	return (
		<div className="">
			{/* Menu icon button */}
			<button onClick={toggleModal} className="" disabled={isModalOpen} aria-label="Open modal">
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
			</Modal>
		</div>
	);

	function toggleModal(): void {
		setIsModalOpen(!isModalOpen);
	}
}

export default App;

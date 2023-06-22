import React, { ReactElement } from 'react';
import { Modal } from './';

export const Header = (): ReactElement => {
	const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);

	return (
		<>
			<nav className="flex items-center justify-between bg-gray-500 p-6">
				<div className="flex items-center text-white">
					<svg
						className="fill-current h-8 w-8 mr-2"
						width="54"
						height="54"
						viewBox="0 0 54 54"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
					</svg>
					<span className="font-semibold text-xl tracking-tight">EHTT</span>
				</div>
				<button
					type="button"
					className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-500 hover:bg-white"
					onClick={toggleModal}
					disabled={isModalOpen}
					aria-label="Open modal"
				>
					Favorites
				</button>
			</nav>
			<Modal setShowModal={setIsModalOpen} showModal={isModalOpen}>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis vitae eaque unde ut. Porro, nobis, veniam
					recusandae ut id fuga esse molestias non, incidunt sed nisi quisquam accusamus eos atque reprehenderit.
					Dolorum, incidunt perspiciatis quibusdam voluptatem atque ipsum recusandae ullam quasi ducimus cumque
					voluptatibus. Obcaecati tempore corporis rerum iure voluptates iste enim magni laborum molestiae, reiciendis
					quibusdam volu
				</p>
			</Modal>
		</>
	);

	function toggleModal(): void {
		setIsModalOpen(!isModalOpen);
	}
};

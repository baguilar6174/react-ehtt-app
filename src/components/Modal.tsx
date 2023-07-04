import { ReactElement } from 'react';
import { CloseIcon } from './Icons';

type ModalProp = {
	children: React.ReactNode;
	showModal: boolean;
	setShowModal: (prev: boolean) => void;
	title?: string;
};

export const Modal = (props: ModalProp): ReactElement | null => {
	const { setShowModal, showModal, children, title } = props;

	if (!showModal) return null;

	return (
		<div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
			<div className="w-[50vw]">
				<div className="bg-white p-10 rounded-md relative">
					<button onClick={handleClose} className="absolute top-3 right-3">
						<CloseIcon className="!w-8" />
					</button>
					{title && <h2 className="text-2xl mb-5">{title}</h2>}
					{children}
				</div>
			</div>
		</div>
	);

	function handleClose(): void {
		setShowModal(false);
	}
};

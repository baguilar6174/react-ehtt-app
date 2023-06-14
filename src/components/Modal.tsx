import { CloseIcon } from './Icons';

type ModalProp = {
	children: React.ReactNode;
	open: boolean;
	toggle: () => void;
};

export const Modal = (props: ModalProp) => {
	const { toggle, open, children } = props;

	if (!open) return null;

	return (
		<div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
			<div className="w-[50vw]">
				<div className="bg-white p-10 rounded-md relative">
					<button onClick={toggle} className="absolute top-3 right-3">
						<CloseIcon className="!w-8" />
					</button>
					<h2 className="text-2xl mb-5">Modal title</h2>
					{children}
				</div>
			</div>
		</div>
	);
};

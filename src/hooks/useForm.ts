import { ChangeEvent, useState } from 'react';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useForm = <T>(initialForm: T) => {
	const [form, setForm] = useState(initialForm);

	const onInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
		const element = event.target as HTMLInputElement;
		const { name, value } = element;
		setForm({
			...form,
			[name]: value
		});
	};

	const onResetForm = (): void => setForm(initialForm);

	return {
		...form,
		form,
		onInputChange,
		onResetForm
	};
};

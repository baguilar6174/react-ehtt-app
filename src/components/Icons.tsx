import { ReactElement } from 'react';

type IconProps = {
	className?: string;
};

export const CloseIcon = ({ className, ...rest }: IconProps): ReactElement => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fillRule="evenodd"
		strokeLinejoin="round"
		strokeMiterlimit={2}
		clipRule="evenodd"
		viewBox="0 0 24 24"
		className={`w-full h-auto ${className}`}
		{...rest}
	>
		<path d="m12 10.93 5.719-5.72a.749.749 0 1 1 1.062 1.062l-5.72 5.719 5.719 5.719a.75.75 0 1 1-1.061 1.062L12 13.053l-5.719 5.719A.75.75 0 0 1 5.22 17.71l5.719-5.719-5.72-5.719A.752.752 0 0 1 6.281 5.21z" />
	</svg>
);

export const SortIcon = ({ className, ...rest }: IconProps): ReactElement => (
	<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} className={`w-full h-auto ${className}`} {...rest}>
		<path d="m12 0 8 10H4l8-10zm8 14H4l8 10 8-10z" />
	</svg>
);

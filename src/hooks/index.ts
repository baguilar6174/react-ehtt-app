import React from 'react';

const VISIBILITY_STATE_SUPPORTED = 'visibilityState' in document;

function isWindowVisible(): boolean {
	if (!VISIBILITY_STATE_SUPPORTED) return true;
	return document.visibilityState === 'visible';
}

export function useIsWindowVisible(): boolean {
	const [isVisible, setIsVisible] = React.useState(isWindowVisible());
	React.useEffect(() => {
		if (!VISIBILITY_STATE_SUPPORTED) return undefined;
		const handleVisibilityChange = (): void => setIsVisible(isWindowVisible());
		document.addEventListener('visibilitychange', handleVisibilityChange);
		return () => {
			document.removeEventListener('visibilitychange', handleVisibilityChange);
		};
	}, [setIsVisible]);

	return isVisible;
}

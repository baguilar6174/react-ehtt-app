import React from 'react';

const VISIBILITY_STATE_SUPPORTED = 'visibilityState' in document;

/**
 * Indicates whether the application is in the current tab or in the background
 * @returns isVisible
 */
export function useVisibilityChange() {
	const [isVisible, setIsVisible] = React.useState(isWindowVisible());

	React.useEffect(() => {
		if (!VISIBILITY_STATE_SUPPORTED) return undefined;
		const handleVisibilityChange = () => setIsVisible(isWindowVisible());
		document.addEventListener('visibilitychange', handleVisibilityChange);
		return () => {
			document.removeEventListener('visibilitychange', handleVisibilityChange);
		};
	}, [setIsVisible]);

	function isWindowVisible() {
		if (!VISIBILITY_STATE_SUPPORTED) return true;
		return document.visibilityState === 'visible';
	}

	return isVisible;
}

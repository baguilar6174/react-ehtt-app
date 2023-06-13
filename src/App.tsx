import React from 'react';
import './App.scss';
import { useVisibilityChange } from './hooks';
import { parseTimeInMillis } from './utils';
import { ONE, SECOND, TWO, ZERO } from './utils/constants';

export type ActivityBaseInternalContainer = {
	interval: number;
	timer: number;
	throttle: null | number;
};

function App(): JSX.Element {
	const isVisible = useVisibilityChange();

	const sessionDuration = parseTimeInMillis('5m');
	const timeBeforeTimeoutNotification = parseTimeInMillis('30s');

	const [timerInBackground, setTimerInBackground] = React.useState<number | undefined>(undefined);
	const [grace, setGrace] = React.useState<number | null>(null);
	const refActivity = React.useRef<null | ActivityBaseInternalContainer>(null);
	const hasToShowExtendSessionModal = Boolean(grace);
	const diffSessionAndNotification = sessionDuration - timeBeforeTimeoutNotification;

	const handleActivityReset = React.useCallback(() => {
		if (!refActivity.current) return;
		const { current } = refActivity;
		if (current.throttle) {
			clearTimeout(current.throttle);
		}
		current.throttle = setTimeout(() => {
			current.timer = Number(sessionDuration);
			setGrace(ZERO);
		}, Number(SECOND / TWO));
	}, [sessionDuration]);

	const returnCheckActivity = React.useCallback(() => {
		const hasUserMovement = false;
		if (hasUserMovement) {
			handleActivityReset();
		}
	}, [handleActivityReset]);

	/** Logs out when the application returns to the foreground and the session time has expired. */
	React.useEffect(() => {
		const doLogoutInBackground = () => {
			console.log('Finalizar sesion');
		};

		setTimerInBackground(undefined);

		if (!isVisible) {
			setTimerInBackground(new Date().getTime());
			return;
		}

		if (!timerInBackground) return;

		let timeInBackground = new Date().getTime() - timerInBackground;
		timeInBackground = Math.round(timeInBackground / Number(SECOND)) * Number(SECOND);

		if (hasToShowExtendSessionModal) return;

		if (timeInBackground < diffSessionAndNotification) return;

		if (timeInBackground < sessionDuration && timeInBackground >= diffSessionAndNotification) {
			if (refActivity.current) cleanupEventsWhenUnmounting();
			setGrace((sessionDuration - timeInBackground + Number(SECOND)) / Number(SECOND));
			refActivity.current = {
				throttle: null,
				timer: Number(sessionDuration - timeInBackground),
				interval: setInterval(async () => {
					if (!refActivity.current) return;
					if (refActivity.current.timer < ONE) {
						console.log('Cerrar sesion');
						return;
					}
					if (refActivity.current.timer <= Number(timeBeforeTimeoutNotification)) {
						setGrace(refActivity.current.timer / Number(SECOND));
					}
					refActivity.current.timer -= Number(SECOND);
				}, Number(SECOND))
			};
			return;
		}
		if (timeInBackground >= sessionDuration) doLogoutInBackground();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isVisible, sessionDuration]);

	/** Monitor user activity when logged in */
	React.useEffect(() => {
		if (refActivity.current) return cleanupEventsWhenUnmounting;
		refActivity.current = {
			throttle: null,
			timer: Number(sessionDuration),
			interval: setInterval(async () => {
				if (!refActivity.current) return;
				// timer reached zero, invalidate current session.
				if (refActivity.current.timer < ONE) {
					console.log('Finalizar sesión');
					return;
				}
				// check if the user is doing stuff on the iframe
				returnCheckActivity();

				if (refActivity.current.timer <= Number(timeBeforeTimeoutNotification)) {
					setGrace(refActivity.current.timer / Number(SECOND));
				}
				refActivity.current.timer -= Number(SECOND);
				console.log(refActivity.current.timer / Number(SECOND));
			}, Number(SECOND))
		};
		return cleanupEventsWhenUnmounting;
	}, [sessionDuration, timeBeforeTimeoutNotification, returnCheckActivity]);

	// check if user is doing stuff outside iframe
	React.useEffect(() => {
		if (hasToShowExtendSessionModal) return undefined;
		const events = ['load', 'mousemove', 'mousedown', 'click', 'scroll', 'keypress'];
		events.forEach((event) => window.addEventListener(event, handleActivityReset));

		return () => events.forEach((event) => window.removeEventListener(event, handleActivityReset));
	}, [handleActivityReset, hasToShowExtendSessionModal]);

	return (
		<div className="py-5">
			<h1>Hello world</h1>
			{hasToShowExtendSessionModal && (
				<div>
					<h3>{grace}</h3>
					<button onClick={handleExtendSession}>Extender sesion</button>
				</div>
			)}
		</div>
	);

	function handleExtendSession() {
		handleActivityReset();
		console.log('LLamando servicio extender sesión');
	}

	function cleanupEventsWhenUnmounting() {
		if (!refActivity.current) return;
		document.onmousemove = null;
		document.ontouchend = null;
		clearInterval(refActivity.current.interval);
		refActivity.current = null;
		setGrace(null);
	}
}

export default App;

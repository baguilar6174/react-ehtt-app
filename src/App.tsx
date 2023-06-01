import React, { useEffect, useMemo, useState } from 'react';
import './App.scss';
import { SECOND, TWO, ZERO } from './utils/constants';
import { parseTimeInMillis } from './utils/utils';
import worker from './worker-script';

export type ActivityBaseInternalContainer = {
	interval: ReturnType<typeof setTimeout>;
	timer: number;
	throttle: null | ReturnType<typeof setTimeout>;
};

function App(): JSX.Element {
	const timerWorker: Worker = useMemo(() => new Worker(worker), []);

	const sessionDuration = parseTimeInMillis('3m');
	const timeBeforeTimeoutNotification = parseTimeInMillis('30s');

	const [grace, setGrace] = React.useState<number | null>(null);
	const refActivity = React.useRef<null | ActivityBaseInternalContainer>(null);
	const hasToShowExtendSessionModal = Boolean(grace);

	const handleActivityReset = React.useCallback(() => {
		if (window.Worker) timerWorker.postMessage({ turn: 'on' });
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

	const returnCheckActivity = React.useCallback(async () => {
		const hasUserMovement = false;
		if (hasUserMovement) {
			handleActivityReset();
		}
	}, [handleActivityReset]);

	React.useEffect(() => {
		if (refActivity.current) return cleanupEventsWhenUnmounting;
		refActivity.current = {
			throttle: null,
			timer: Number(sessionDuration),
			interval: setInterval(() => {
				if (!refActivity.current) return;
				// timer reached zero, invalidate current session.
				if (!refActivity.current.timer) {
					// console.log('Finalizó la sesión');

					return;
				}
				// check if the user is doing stuff on the iframe
				returnCheckActivity();

				if (refActivity.current.timer <= Number(timeBeforeTimeoutNotification)) {
					setGrace(refActivity.current.timer / Number(SECOND));
				}
				refActivity.current.timer -= Number(SECOND);
				// console.log(refActivity.current.timer / Number(SECOND));
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

	const [webWorkerTime, setWebWorkerTime] = useState<number>(sessionDuration);

	useEffect(() => {
		if (window.Worker) {
			timerWorker.onmessage = ({ data }): void => {
				const { time } = data;
				console.log(time / Number(SECOND));
				setWebWorkerTime(time);
			};
		}
	}, [timerWorker]);

	/* const resetWebWorkerTimer = (): void => {
		timerWorker.postMessage({ turn: 'off' });
		setWebWorkerTime(sessionDuration);
	}; */

	return (
		<div className="py-5">
			<h1>Hello world</h1>
			{/* {hasToShowExtendSessionModal && (
				<div className="p-12">
					<h4>{`Su sesión va a expirar ${grace}`}</h4>
				</div>
			)}
			{grace && grace <= 1 && <h5 className="mt-5">Su sesión expiró</h5>} */}
			Time: {webWorkerTime / Number(SECOND)}
		</div>
	);

	function cleanupEventsWhenUnmounting(): void {
		if (!refActivity.current) return;
		document.onmousemove = null;
		document.ontouchend = null;
		clearInterval(refActivity.current.interval);
		refActivity.current = null;
		setGrace(null);
		if (window.Worker) {
			timerWorker.postMessage({ turn: 'off' });
			setWebWorkerTime(sessionDuration);
		}
	}
}

export default App;

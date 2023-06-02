import { useEffect, useState } from 'react';
import { useIdleTimer } from './timer/idle-timer';
import { SECOND, ZERO } from './utils/constants';
import { parseTimeInMillis } from './utils/utils';

function AppidleTimer(): JSX.Element {
	const sessionDuration = parseTimeInMillis('3m');
	const timeBeforeTimeoutNotification = parseTimeInMillis('30s');
	const throttle = 500;

	const [remaining, setRemaining] = useState<number>(ZERO);
	const [state, setState] = useState<string>('Active');
	const [open, setOpen] = useState<boolean>(false);

	const onIdle = (): void => {
		setState('Idle');
		setOpen(false);
	};

	const onActive = (): void => {
		setState('Active');
		setOpen(false);
	};

	const onPrompt = (): void => {
		setState('Prompted');
		setOpen(true);
	};

	const { getRemainingTime, activate } = useIdleTimer({
		onIdle,
		onActive,
		onPrompt,
		timeout: sessionDuration,
		promptBeforeIdle: timeBeforeTimeoutNotification,
		throttle
	});

	useEffect(() => {
		const interval = setInterval(() => {
			setRemaining(Math.ceil(getRemainingTime() / Number(SECOND)));
			// console.log(remaining);
		}, Number(SECOND));

		return () => {
			clearInterval(interval);
		};
	});

	const handleStillHere = (): void => activate();

	return (
		<>
			<p>Current State: {state}</p>
			{remaining > 0 && <p>{remaining} seconds remaining</p>}
			<div
				className="flex flex-row min-h-screen justify-center items-center"
				style={{
					display: open ? 'flex' : 'none'
				}}
			>
				<div className="bg-slate-400 p-10 text-center">
					<h3>Are you still here?</h3>
					<p>Logging out in {remaining} seconds</p>
					<button className="mt-5 p-2 border border-red-500 text-red-500" onClick={handleStillHere}>
						Im still here
					</button>
				</div>
			</div>
		</>
	);
}

export default AppidleTimer;

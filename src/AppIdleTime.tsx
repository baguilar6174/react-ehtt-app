import { useEffect, useState } from 'react';
import { useIdleTimer } from 'react-idle-timer';

function AppidleTimer(): JSX.Element {
	const [remaining, setRemaining] = useState<number>(0);

	const { getRemainingTime } = useIdleTimer({
		timeout: 180000,
		throttle: 500
	});

	useEffect(() => {
		const interval = setInterval(() => {
			setRemaining(Math.ceil(getRemainingTime() / 1000));
			console.log(remaining);
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	});

	return (
		<>
			<p>{remaining} seconds remaining</p>
		</>
	);
}

export default AppidleTimer;

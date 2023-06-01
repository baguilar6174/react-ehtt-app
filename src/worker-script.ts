const workercode = (): void => {
	let timerInterval: number | undefined;
	let time = 180000;
	self.onmessage = function ({ data: { turn } }): void {
		if (turn === 'off' || timerInterval) {
			clearInterval(timerInterval);
			time = 0;
		}
		if (turn === 'on') {
			timerInterval = setInterval((): void => {
				time -= Number(1000);
				self.postMessage({ time });
			}, Number(1000));
		}
	};
};

let code = workercode.toString();
code = code.substring(code.indexOf('{') + 1, code.lastIndexOf('}'));

const blob = new Blob([code], { type: 'application/javascript' });
const worker = URL.createObjectURL(blob);
export default worker;

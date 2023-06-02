/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { generateUniqueNumber } from 'fast-unique-numbers';
// import { IWorkerEvent, TTimerType } from 'worker-timers-worker';
import { isCallNotification } from './guards/call-notification';
import { isClearResponse } from './guards/clear-response';

export interface IClearRequest {
	id: number;

	method: 'clear';

	params: {
		timerId: number;

		timerType: TTimerType;
	};
}

export type TTimerType = 'interval' | 'timeout';

export interface ISetNotification {
	id: null;

	method: 'set';

	params: {
		delay: number;

		now: number;

		timerId: number;

		timerType: TTimerType;
	};
}

export interface ICallNotification {
	id: null;

	method: 'call';

	params: {
		timerId: number;

		timerType: TTimerType;
	};
}

export interface IClearResponse {
	error: null;
	id: number;
}

export interface IErrorNotification {
	error: {
		message: string;
	};

	id: null;

	result: null;
}

export interface IErrorResponse {
	error: {
		message: string;
	};

	id: number;

	result: null;
}

export type TWorkerMessage = ICallNotification | IClearResponse | IErrorNotification | IErrorResponse;

export interface IWorkerEvent extends Event {
	data: TWorkerMessage;
}

export const load = (url: string) => {
	// Prefilling the Maps with a function indexed by zero is necessary to be compliant with the specification.
	const scheduledIntervalFunctions: Map<number, number | Function> = new Map([[0, () => {}]]); // tslint:disable-line no-empty
	const scheduledTimeoutFunctions: Map<number, number | Function> = new Map([[0, () => {}]]); // tslint:disable-line no-empty
	const unrespondedRequests: Map<number, { timerId: number; timerType: TTimerType }> = new Map();

	const worker = new Worker(url);

	worker.addEventListener('message', ({ data }: IWorkerEvent) => {
		if (isCallNotification(data)) {
			const {
				params: { timerId, timerType }
			} = data;

			if (timerType === 'interval') {
				const idOrFunc = scheduledIntervalFunctions.get(timerId);

				if (typeof idOrFunc === 'number') {
					const timerIdAndTimerType = unrespondedRequests.get(idOrFunc);

					if (
						timerIdAndTimerType === undefined ||
						timerIdAndTimerType.timerId !== timerId ||
						timerIdAndTimerType.timerType !== timerType
					) {
						throw new Error('The timer is in an undefined state.');
					}
				} else if (typeof idOrFunc !== 'undefined') {
					idOrFunc();
				} else {
					throw new Error('The timer is in an undefined state.');
				}
			} else if (timerType === 'timeout') {
				const idOrFunc = scheduledTimeoutFunctions.get(timerId);

				if (typeof idOrFunc === 'number') {
					const timerIdAndTimerType = unrespondedRequests.get(idOrFunc);

					if (
						timerIdAndTimerType === undefined ||
						timerIdAndTimerType.timerId !== timerId ||
						timerIdAndTimerType.timerType !== timerType
					) {
						throw new Error('The timer is in an undefined state.');
					}
				} else if (typeof idOrFunc !== 'undefined') {
					idOrFunc();

					// A timeout can be savely deleted because it is only called once.
					scheduledTimeoutFunctions.delete(timerId);
				} else {
					throw new Error('The timer is in an undefined state.');
				}
			}
		} else if (isClearResponse(data)) {
			const { id } = data;

			const timerIdAndTimerType = unrespondedRequests.get(id);

			if (timerIdAndTimerType === undefined) {
				throw new Error('The timer is in an undefined state.');
			}

			const { timerId, timerType } = timerIdAndTimerType;

			unrespondedRequests.delete(id);

			if (timerType === 'interval') {
				scheduledIntervalFunctions.delete(timerId);
			} else {
				scheduledTimeoutFunctions.delete(timerId);
			}
		} else {
			const {
				error: { message }
			} = data;

			throw new Error(message);
		}
	});

	const clearInterval = (timerId: number) => {
		const id = generateUniqueNumber(unrespondedRequests);

		unrespondedRequests.set(id, { timerId, timerType: 'interval' });
		scheduledIntervalFunctions.set(timerId, id);

		worker.postMessage(<IClearRequest>{
			id,
			method: 'clear',
			params: { timerId, timerType: 'interval' }
		});
	};

	const clearTimeout = (timerId: number) => {
		const id = generateUniqueNumber(unrespondedRequests);

		unrespondedRequests.set(id, { timerId, timerType: 'timeout' });
		scheduledTimeoutFunctions.set(timerId, id);

		worker.postMessage(<IClearRequest>{
			id,
			method: 'clear',
			params: { timerId, timerType: 'timeout' }
		});
	};

	const setInterval = (func: Function, delay: number) => {
		const timerId = generateUniqueNumber(scheduledIntervalFunctions);

		scheduledIntervalFunctions.set(timerId, () => {
			func();

			// Doublecheck if the interval should still be rescheduled because it could have been cleared inside of func().
			if (typeof scheduledIntervalFunctions.get(timerId) === 'function') {
				worker.postMessage(<ISetNotification>{
					id: null,
					method: 'set',
					params: {
						delay,
						now: performance.now(),
						timerId,
						timerType: 'interval'
					}
				});
			}
		});

		worker.postMessage(<ISetNotification>{
			id: null,
			method: 'set',
			params: {
				delay,
				now: performance.now(),
				timerId,
				timerType: 'interval'
			}
		});

		return timerId;
	};

	const setTimeout = (func: Function, delay: number) => {
		const timerId = generateUniqueNumber(scheduledTimeoutFunctions);

		scheduledTimeoutFunctions.set(timerId, func);

		worker.postMessage(<ISetNotification>{
			id: null,
			method: 'set',
			params: {
				delay,
				now: performance.now(),
				timerId,
				timerType: 'timeout'
			}
		});

		return timerId;
	};

	return {
		clearInterval,
		clearTimeout,
		setInterval,
		setTimeout
	};
};

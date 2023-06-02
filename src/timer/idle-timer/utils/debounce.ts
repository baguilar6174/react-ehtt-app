/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { FnType } from '../types/FnType';
import { IEventHandler } from '../types/IEventHandler';

/**
 * Creates a debounced function that delays invoking func until
 * after delay milliseconds has elapsed since the last time the
 * debounced function was invoked.
 *
 * @param fn  Function to debounce
 * @param delay  How long to wait
 * @return Executed Function
 * @private
 **/
export function debounceFn(fn: FnType, delay: number): IEventHandler {
	let timerId: number | undefined;
	function result(...args: any[]): any {
		if (timerId) {
			clearTimeout(timerId);
		}
		timerId = setTimeout(() => {
			fn(...args);
			timerId = undefined;
		}, delay);
	}

	result.cancel = function () {
		clearTimeout(timerId);
	};

	return result;
}

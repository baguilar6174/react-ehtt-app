import { EventsType, FnType, IEventHandler, ITimers } from '../types';
import * as worker from '../../workers-timer/module';

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

	result.cancel = function (): void {
		clearTimeout(timerId);
	};

	return result;
}

/**
 * Determine if we are in a browser or a server environment.
 *
 * @private
 */
export const IS_BROWSER: boolean = (typeof window === 'undefined' ? 'undefined' : typeof window) === 'object';

/**
 * Default element to listen for events on.
 *
 * @private
 */
export const DEFAULT_ELEMENT: Document | HTMLElement | null = IS_BROWSER ? document : null;

/**
 * The default events to determine activity.
 *
 * @private
 */
export const DEFAULT_EVENTS: EventsType[] = [
	'mousemove',
	'keydown',
	'wheel',
	'DOMMouseScroll',
	'mousewheel',
	'mousedown',
	'touchstart',
	'touchmove',
	'MSPointerDown',
	'MSPointerMove',
	'visibilitychange',
	'focus'
];

export const now = (): number => Date.now();

/**
 * Sleeps for x amount of milliseconds.
 *
 * @param time   Amount of time in milliseconds.
 * @returns Promise resolving timeout id.
 * @private
 */
export function sleep(time = 0): Promise<void> {
	return new Promise((resolve) => timers.setTimeout(resolve, time));
}

/**
 * Creates a throttled function that only invokes func at most
 * once per every wait milliseconds.
 *
 * @param fn  Function to debounce
 * @param delay  How long to wait
 * @return Executed Function
 * @private
 **/
export function throttleFn(fn: FnType, delay: number): FnType {
	let lastCall = 0;
	return function (...args) {
		const now = new Date().getTime();
		if (now - lastCall < delay) {
			return;
		}
		lastCall = now;
		return fn(...args);
	};
}

export const timers: ITimers = {
	setTimeout: IS_BROWSER ? setTimeout.bind(window) : setTimeout,
	clearTimeout: IS_BROWSER ? clearTimeout.bind(window) : clearTimeout,
	setInterval: IS_BROWSER ? setInterval.bind(window) : setInterval,
	clearInterval: IS_BROWSER ? clearInterval.bind(window) : clearInterval
};

export const workerTimers: ITimers = {
	setTimeout: worker.setTimeout,
	clearTimeout: worker.clearTimeout,
	setInterval: worker.setInterval,
	clearInterval: worker.clearInterval
};

export function createMocks(): void {
	timers.setTimeout = setTimeout;
	timers.clearTimeout = clearTimeout;
	timers.setInterval = setInterval;
	timers.clearInterval = clearInterval;
	workerTimers.setTimeout = setTimeout;
	workerTimers.clearTimeout = clearTimeout;
	workerTimers.setInterval = setInterval;
	workerTimers.clearInterval = clearInterval;
}

export function setTimers(customTimers: ITimers): void {
	timers.setTimeout = customTimers.setTimeout;
	timers.clearTimeout = customTimers.clearTimeout;
	timers.setInterval = customTimers.setInterval;
	timers.clearInterval = customTimers.clearInterval;
}

/**
 * Generate a random token.
 *
 * @returns {String} Random token.
 * @private
 */
export function createToken(): string {
	return Math.random().toString(36).substring(2);
}

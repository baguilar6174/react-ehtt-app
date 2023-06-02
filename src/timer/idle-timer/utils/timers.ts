/* eslint-disable @typescript-eslint/explicit-function-return-type */
import * as worker from '../../workers-timer/module';
import { IS_BROWSER } from './isBrowser';
import { ITimers } from '../types/ITimers';

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

export function createMocks() {
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

/* eslint-disable @typescript-eslint/no-explicit-any */
import type { EventType } from './EventType';
// import type { IIdleTimer } from './IIdleTimer';

export interface IEventHandler {
	(event?: EventType | Event | any, idleTimer?: any): void;
	cancel?: () => void;
}

import type { EventType } from './EventType';
import type { IIdleTimer } from './IIdleTimer';

export interface IEventHandler {
	(event?: EventType | Event, idleTimer?: IIdleTimer): void;
	cancel?: () => void;
}

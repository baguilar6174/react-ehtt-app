/* eslint-disable @typescript-eslint/no-explicit-any */
import type { PresenceType } from './PresenceType';
import type { IIdleTimer } from './IIdleTimer';

export interface IPresenceChangeHandler {
	(presence: PresenceType, idleTimer?: IIdleTimer | any): void;
}

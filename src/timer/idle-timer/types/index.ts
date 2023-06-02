import { RefObject } from 'react';

export type EventsType =
	| 'abort'
	| 'afterprint'
	| 'animationend'
	| 'animationiteration'
	| 'animationstart'
	| 'beforeprint'
	| 'beforeunload'
	| 'blur'
	| 'canplay'
	| 'canplaythrough'
	| 'change'
	| 'click'
	| 'contextmenu'
	| 'copy'
	| 'cut'
	| 'dblclick'
	| 'DOMMouseScroll'
	| 'drag'
	| 'dragend'
	| 'dragenter'
	| 'dragleave'
	| 'dragover'
	| 'dragstart'
	| 'drop'
	| 'durationchange'
	| 'ended'
	| 'error'
	| 'focus'
	| 'focusin'
	| 'focusout'
	| 'fullscreenchange'
	| 'fullscreenerror'
	| 'gotpointercapture'
	| 'hashchange'
	| 'input'
	| 'invalid'
	| 'keydown'
	| 'keypress'
	| 'keyup'
	| 'load'
	| 'loadeddata'
	| 'loadedmetadata'
	| 'loadstart'
	| 'lostpointercapture'
	| 'message'
	| 'mousedown'
	| 'mouseenter'
	| 'mouseleave'
	| 'mousemove'
	| 'mouseover'
	| 'mouseout'
	| 'mouseup'
	| 'mousewheel'
	| 'MSPointerDown'
	| 'MSPointerMove'
	| 'offline'
	| 'online'
	| 'open'
	| 'pagehide'
	| 'pageshow'
	| 'paste'
	| 'pause'
	| 'play'
	| 'playing'
	| 'pointercancel'
	| 'pointerdown'
	| 'pointerenter'
	| 'pointerleave'
	| 'pointermove'
	| 'pointerout'
	| 'pointerover'
	| 'pointerup'
	| 'popstate'
	| 'progress'
	| 'ratechange'
	| 'resize'
	| 'reset'
	| 'scroll'
	| 'search'
	| 'seeked'
	| 'seeking'
	| 'select'
	| 'show'
	| 'stalled'
	| 'storage'
	| 'submit'
	| 'suspend'
	| 'timeupdate'
	| 'toggle'
	| 'touchcancel'
	| 'touchend'
	| 'touchmove'
	| 'touchstart'
	| 'transitionend'
	| 'unload'
	| 'volumechange'
	| 'waiting'
	| 'wheel'
	| 'visibilitychange';

export type EventType = Event & MouseEvent & KeyboardEvent;

export type FnType = (...args: any[]) => any;

export interface IIdleTimer {
	/**
	 * Restore initial state and restart timer.
	 */
	start(): void;

	/**
	 * Restore initial state.
	 */
	reset(): void;

	/**
	 * Restore initial state and emit onActive if the user was prompted or idle.
	 */
	activate(): void;

	/**
	 * Store remaining time and stop timer.
	 *
	 * @returns whether or not the instance was paused.
	 */
	pause(): boolean;

	/**
	 * Resumes a paused timer.
	 *
	 * @returns whether or not the instance was resumed.
	 */
	resume(): boolean;

	/**
	 * Broadcast an arbitrary message to all instances of IdleTimer.
	 *
	 * @param data  Data to emit to `onMessage` callbacks.
	 * @param emitOnSelf  Emit the event on the callee instance.
	 */
	message(data: string | number | object, emitOnSelf?: boolean): void;

	/**
	 * Returns whether or not the user is idle.
	 *
	 * @returns Idle state.
	 */
	isIdle(): boolean;

	/**
	 * Returns whether or not the current tab is the leader.
	 *
	 * @returns Leader state.
	 */
	isLeader(): boolean;

	/**
	 * Returns whether or not the prompt is active.
	 *
	 * @returns Prompted state.
	 */
	isPrompted(): boolean;

	/**
	 * Returns whether or not this is the last active tab.
	 *
	 * @returns Last active state.
	 */
	isLastActiveTab(): boolean;

	/**
	 * Returns the current tabs id.
	 */
	getTabId(): string | null;

	/**
	 * Time remaining before idle or prompt.
	 *
	 * @returns Number of milliseconds until idle or prompt.
	 */
	getRemainingTime(): number;

	/**
	 * Time elapsed since last reset.
	 *
	 * @returns Number of milliseconds since the hook was last reset.
	 */
	getElapsedTime(): number;

	/**
	 * Time elapsed since mounted.
	 *
	 * @returns Number of milliseconds since the hook was mounted.
	 */
	getTotalElapsedTime(): number;

	/**
	 * Last time the user was idle.
	 *
	 * @returns A Date object that can be formatted.
	 */
	getLastIdleTime(): Date | null;

	/**
	 * Last time the user was active.
	 *
	 * @returns A Date object that can be formatted.
	 */
	getLastActiveTime(): Date | null;

	/**
	 * Time in milliseconds user has been idle since last reset.
	 *
	 * @returns Time in milliseconds the user has been idle.
	 */
	getIdleTime(): number;

	/**
	 * Total time in milliseconds user has been idle since the hook mounted.
	 *
	 * @returns Time in milliseconds the user has been idle.
	 */
	getTotalIdleTime(): number;

	/**
	 * Total time in milliseconds user has been active since last reset.
	 *
	 * @returns Time in milliseconds the user has been active.
	 */
	getActiveTime(): number;

	/**
	 * Total time in milliseconds user has been active since the hook mounted.
	 *
	 * @returns Time in milliseconds the user has been active.
	 */
	getTotalActiveTime(): number;
}

export interface IIdleTimerProps {
	/**
	 * IdleTimer ref for class components.
	 *
	 * @default undefined
	 */
	ref?: RefObject<IIdleTimer>;

	/**
	 * Activity Timeout in milliseconds.
	 *
	 * @default 1200000
	 */
	timeout?: number;

	/**
	 * When the user becomes idle, the onPrompt function is called and
	 * after the prompt timeout in milliseconds is reached, the onIdle function
	 * is called.
	 *
	 * @default 0
	 * @deprecated use promptBeforeIdle
	 */
	promptTimeout?: number;

	/**
	 * The amount of milliseconds before timeout to call the onPrompt event handler.
	 *
	 * @default 0
	 */
	promptBeforeIdle?: number;

	/**
	 * Element to bind activity listeners to.
	 *
	 * @default document
	 */
	element?: Document | HTMLElement | null;

	/**
	 * DOM events to watch for activity on.
	 *
	 * @default DefaultEvents
	 * @link [default events](https://idletimer.dev/docs/props#events).
	 */
	events?: EventsType[];

	/**
	 * DOM events that will bypass the timeout and immediately emit onPrompt/onIdle
	 * events. The events in this array take precedence over the events array.
	 *
	 * @default []
	 */
	immediateEvents?: EventsType[];

	/**
	 * Function to call when the users presence state changes.
	 *
	 * @default () => {}
	 */
	onPresenceChange?: (presence: PresenceType, idleTimer?: IIdleTimer) => void;

	/**
	 * When promptTimeout is set, this function is called after the user becomes
	 * idle. This is useful for displaying a confirm prompt. If the prompt timeout
	 * is reached, onIdle is then called.
	 *
	 * @default () => {}
	 */
	onPrompt?: (event?: Event, idleTimer?: IIdleTimer) => void;

	/**
	 * Function to call when user is idle.
	 *
	 * @default () => {}
	 */
	onIdle?: (event?: Event, idleTimer?: IIdleTimer) => void;

	/**
	 * Function to call when user becomes active.
	 *
	 * @default () => {}
	 */
	onActive?: (event?: Event, idleTimer?: IIdleTimer) => void;

	/**
	 * Function to call on user activity. Can be throttled or debounced using the
	 * `throttle` and `debounce` props.
	 *
	 * @default () => {}
	 */
	onAction?: (event?: Event, idleTimer?: IIdleTimer) => void;

	/**
	 * Function to call when message is has been emitted.
	 *
	 * @default () => {}
	 */
	onMessage?: (data: any, idleTimer?: IIdleTimer) => void;

	/**
	 * Debounce the onAction function by setting delay in milliseconds.
	 *
	 * @default 0
	 */
	debounce?: number;

	/**
	 * Throttle the onAction function by setting delay in milliseconds.
	 *
	 * @default 0
	 */
	throttle?: number;

	/**
	 * Throttle the activity events. Useful if you are listening to mouse events.
	 * Helps to cut down on cpu usage.
	 *
	 * @default 200
	 */
	eventsThrottle?: number;

	/**
	 * Start the timer when the hook mounts.
	 *
	 * @default true
	 */
	startOnMount?: boolean;

	/**
	 * Require the timer to be started manually.
	 *
	 * @default false
	 */
	startManually?: boolean;

	/**
	 * Once the user goes idle the IdleTimer will not reset on user input instead,
	 * start() or reset() must be called manually to restart the timer.
	 *
	 * @default false
	 */
	stopOnIdle?: boolean;

	/**
	 * Timer interface to use. By default the main thread timers are used to keep
	 * the module tree shakeable. If you want to use worker timers, import them
	 * and set them here.
	 *
	 * @default Main Thread Timers
	 */
	timers?: ITimers;

	/**
	 * Enable cross tab event replication.
	 *
	 * @default false
	 */
	crossTab?: boolean;

	/**
	 * Name of this IdleTimer instance. Useful if you are instantiating multiple
	 * IdleTimer instances with crossTab enabled.
	 */
	name?: string;

	/**
	 * Sync the timers across all tabs. The value is the interval in which timers
	 * will be synced. Setting it to 0 is equivalent to turning the feature off.
	 *
	 * @default 0
	 */
	syncTimers?: number;

	/**
	 * Enables the leader election feature. Leader Election will assign one tab to
	 * be the leader. Determine if a tab is leader using the `isLeader` method.
	 */
	leaderElection?: boolean;
}

export interface IEventHandler {
	(event?: EventType | Event, idleTimer?: IIdleTimer): void;
	cancel?: () => void;
}

export interface IMessageHandler {
	(data: any, idleTimer: IIdleTimer): void;
}

export type PresenceType = { type: 'idle' } | { type: 'active'; prompted: boolean };

export interface IPresenceChangeHandler {
	(presence: PresenceType, idleTimer?: IIdleTimer): void;
}

export interface ITimers {
	setTimeout(fn: () => void, delay: number): number;
	clearTimeout(id: number): void;
	setInterval(fn: () => void, delay: number): number;
	clearInterval(id: number): void;
}

export enum MessageActionType {
	APPLY,
	TELL,
	CLOSE,
	REGISTER,
	DEREGISTER,
	IDLE,
	ACTIVE,
	PROMPT,
	START,
	RESET,
	ACTIVATE,
	PAUSE,
	RESUME,
	MESSAGE
}

export type MessageType = string | number | object;

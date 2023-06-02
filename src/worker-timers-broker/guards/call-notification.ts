export type TTimerType = 'interval' | 'timeout';

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

export const isCallNotification = (message: TWorkerMessage): message is ICallNotification => {
	return (<ICallNotification>message).method !== undefined && (<ICallNotification>message).method === 'call';
};

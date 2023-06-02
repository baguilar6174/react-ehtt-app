import { ICallNotification, IClearResponse, TWorkerMessage } from '../types';

export const isCallNotification = (message: TWorkerMessage): message is ICallNotification => {
	return (<ICallNotification>message).method !== undefined && (<ICallNotification>message).method === 'call';
};

export const isClearResponse = (message: TWorkerMessage): message is IClearResponse => {
	return (<IClearResponse>message).error === null && typeof message.id === 'number';
};

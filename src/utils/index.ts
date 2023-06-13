import { DAY, MINUS_ONE, MINUTES, SECOND, ZERO } from './constants';

export function parseTimeInMillis(time: string): number {
	const value = Number(time.slice(ZERO, MINUS_ONE));
	switch (time.slice(MINUS_ONE).toLowerCase()) {
		case 'd':
			return value * DAY * MINUTES * MINUTES * SECOND;
		case 'h':
			return value * MINUTES * MINUTES * SECOND;
		case 'm':
			return value * MINUTES * SECOND;
		case 's':
			return value * SECOND;
		default:
			// Si no es ninguna de esas letras asumimos que ya esta en milisegundos
			return Number(time);
	}
}

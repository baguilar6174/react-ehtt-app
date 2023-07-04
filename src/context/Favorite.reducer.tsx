import { Person } from '../data/mock/employees';
import { FavoritesState } from './Favorite.provider';

type EntriesActionType = { type: '[Favorites] - Update favorite'; payload: Person };

export const favoritesReducer = (state: FavoritesState, action: EntriesActionType): FavoritesState => {
	switch (action.type) {
		case '[Favorites] - Update favorite':
			return {
				...state,
				favorites: state.favorites.includes(action.payload)
					? [...state.favorites.filter((person) => person !== action.payload)]
					: [...state.favorites, action.payload]
			};
		default:
			return state;
	}
};

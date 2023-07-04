import { useSnackbar } from 'notistack';
import { useReducer } from 'react';

import { FavoritesContext, favoritesReducer } from '.';
import { Person } from '../data/mock/employees';

export interface FavoritesState {
	favorites: Person[];
}

const INITIAL_STATE: FavoritesState = {
	favorites: []
};

type EntriesProviderProps = {
	children: React.ReactNode;
};

export const FavoritesProvider = ({ children }: EntriesProviderProps): React.ReactElement => {
	const [state, dispatch] = useReducer(favoritesReducer, INITIAL_STATE);
	const { enqueueSnackbar } = useSnackbar();

	return <FavoritesContext.Provider value={{ ...state, updateFavorite }}>{children}</FavoritesContext.Provider>;

	function updateFavorite(person: Person): void {
		dispatch({
			type: '[Favorites] - Update favorite',
			payload: person
		});
		enqueueSnackbar('Updated favorite', {
			variant: 'warning',
			autoHideDuration: 2000,
			anchorOrigin: {
				vertical: 'bottom',
				horizontal: 'right'
			}
		});
	}
};

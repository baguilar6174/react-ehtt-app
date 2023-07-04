import { createContext } from 'react';
import { Person } from '../data/mock/employees';

export interface ContextProps {
	favorites: Person[];
	updateFavorite(person: Person, showSnackbar?: boolean): void;
}

export const FavoritesContext = createContext({} as ContextProps);

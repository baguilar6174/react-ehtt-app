import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';
import { FavoritesProvider } from './context';
import { SnackbarProvider } from 'notistack';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<SnackbarProvider>
			<FavoritesProvider>
				<App />
			</FavoritesProvider>
		</SnackbarProvider>
	</React.StrictMode>
);

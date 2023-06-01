import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import './index.scss';
import AppidleTimer from './AppIdleTime';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<AppidleTimer />
	</React.StrictMode>
);

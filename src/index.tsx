import Tags from '@components/Meta/HeadTags';
import Router from '@src/router';
import React from 'react';
import ReactDOM from 'react-dom/client';

import Header from '@components/Header';
import '@css/application.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Tags />
		<div style={{ paddingLeft: '25%', paddingRight: '25%' }}>
			<div
				style={{
					height: '100vh',
					backgroundColor: '#f5f5f5s',
					width: '100%',
					boxShadow: '0px 0px 30px rgba(0, 0, 0, 0.1)',
				}}>
				<Header location={window.location.pathname} />
				<Router />
			</div>
		</div>
	</React.StrictMode>
);


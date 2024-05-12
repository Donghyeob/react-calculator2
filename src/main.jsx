import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app/App';
import { Providers } from './app/providers';
import { app } from './app/styles/styles.css.ts';

const rootElement = document.getElementById('root');

createRoot(rootElement).render(
    <Providers>
        <React.StrictMode>
            <App className={app} />
        </React.StrictMode>
    </Providers>,
);

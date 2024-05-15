import React from 'react';
import { createRoot } from 'react-dom/client';
import { Providers } from './app/providers';
import App from './app/App';

const rootElement = document.getElementById('root');

createRoot(rootElement).render(
    <Providers>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Providers>,
);

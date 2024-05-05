import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Providers from './Propviders';

ReactDOM.createRoot(document.getElementById('root')).render(
    <Providers>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Providers>,
);

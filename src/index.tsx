import ReactDOM from 'react-dom';
import { StrictMode } from 'react';
import App from './App';

const appElement = document.getElementById('app');

ReactDOM.render(
    <StrictMode>
        <App />
    </StrictMode>,
    appElement,
);

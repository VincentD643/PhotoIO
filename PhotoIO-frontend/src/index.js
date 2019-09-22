import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import { Provider } from 'react-redux';
import { SnackbarProvider } from 'notistack';
import store from './store'
import 'spectre.css/dist/spectre.min.css';
import 'spectre.css/dist/spectre-icons.css';
import './index.css';


ReactDOM.render(
    <Provider store={store}>
        <SnackbarProvider maxSnack={3}>
            <App />
        </SnackbarProvider>
    </Provider>,
    document.getElementById('root'));

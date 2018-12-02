import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './js/store/store';
import { Provider } from 'mobx-react';

window.store = store;
// ReactDOM.render(<App />, document.getElementById('root'));


ReactDOM.render(<Provider store={store}>
                <App />
            </Provider>, document.getElementById('root'));
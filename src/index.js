import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// components
import AppRoutes from './routes';
import store from './store';
// styles
import './assets/styles/index.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={store}>
    <AppRoutes />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
                      
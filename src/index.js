import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import { createStore } from 'redux';
import configureStore from './configureStore';
import DevTools from './DevTools';

const store = configureStore({});

ReactDOM.render(
  <Provider store={store}>
    <div>
      { process.env.NODE_ENV !== 'production' && <DevTools /> }
      <App />
    </div>
  </Provider>,
  document.getElementById('app'));

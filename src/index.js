import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./reducers";

import App from './App';

import './scss/fonts.scss';
import './scss/visually-hidden.scss';
import './index.scss';
import './scss/btn.scss';
import './scss/eye.scss';
import './scss/page.scss';
import * as serviceWorker from './serviceWorker';

const middlewareEnhancer = applyMiddleware(thunkMiddleware);
const composedEnhancer = compose(middlewareEnhancer);
const store = createStore(rootReducer, undefined, composedEnhancer);

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

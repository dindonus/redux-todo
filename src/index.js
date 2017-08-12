import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import reducer from './reducers/index';
import './index.css';

const devToolsName = '__REDUX_DEVTOOLS_EXTENSION__';
const devTools = (window[devToolsName] && window[devToolsName]());
const store = createStore(reducer, devTools);
const renderApp = (app) => {
  ReactDOM.render(
    <Provider store={store}>
      {app}
    </Provider>, document.getElementById('root'),
  );
};

renderApp(<App />);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NextApp = require('./components/App').default; // eslint-disable-line global-require
    renderApp(<NextApp />);
  });
}

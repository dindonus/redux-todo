import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import registerServiceWorker from './utils/registerServiceWorker';
import reducer from './reducers/index';
import './index.css';

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const renderApp = (app) => {
  ReactDOM.render(
    <Provider store={store}>
      {app}
    </Provider>, document.getElementById('root'),
  );
};

renderApp(<App />);
registerServiceWorker();

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NextApp = require('./components/App').default;
    renderApp(<NextApp />);
  });
}

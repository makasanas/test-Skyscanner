import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './redux/store';
import * as serviceWorker from './serviceWorker';
import App from './App';
import './styles.scss';

const Root = () => (
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  );
  ReactDOM.render(Root(), document.getElementById('root'));

  serviceWorker.unregister();
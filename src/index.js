import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './styles/index.css';
import { Router } from 'react-router-dom';
import App from './components/App';
import createBrowserHistory from 'history/createBrowserHistory'
import registerServiceWorker from './registerServiceWorker';

const history = new createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById('root'));
registerServiceWorker();

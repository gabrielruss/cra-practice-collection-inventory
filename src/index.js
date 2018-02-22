import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import { loadInventory } from "./actions/inventoryActions";
import { loadGameConsoles } from "./actions/gameConsoleActions";
import App from "./components/App";
import "semantic-ui-css/semantic.min.css";
import createBrowserHistory from "history/createBrowserHistory";
import registerServiceWorker from "./registerServiceWorker";

const history = new createBrowserHistory();
const store = configureStore();

store.dispatch(loadInventory());
store.dispatch(loadGameConsoles());

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();

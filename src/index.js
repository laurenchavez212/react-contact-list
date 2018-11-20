import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
import { fetchContacts } from "./redux/contactActions";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootswatch/dist/spacelab/bootstrap.min.css";


let newStore = store();

newStore.dispatch(fetchContacts());

ReactDOM.render(
  <Provider store={newStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);

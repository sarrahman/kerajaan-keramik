import React from "react";
import ReactDOM from "react-dom";
import Store from "./redux/store";
import { Provider } from "react-redux";
import App from './containers/app';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

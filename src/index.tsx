import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { store } from "./store/store";
import { Provider } from "react-redux";
import { AppContextProvider } from "./context/AppContext";
import * as serviceWorker from "./serviceWorker";

import "./styles/global.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppContextProvider>
        <Router basename="/cocktail-pro">
          <App />
        </Router>
      </AppContextProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root"),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

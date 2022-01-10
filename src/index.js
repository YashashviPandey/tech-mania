import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "styled-components";
import theme from "./Theme/theme";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import Store from "./Store";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router>
        <Provider store={Store}>
          <App />
        </Provider>
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();

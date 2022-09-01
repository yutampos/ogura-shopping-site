import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { Provider } from "react-redux";
import store from "./store/index";
import { CookiesProvider } from "react-cookie";
import { Auth0Provider } from "@auth0/auth0-react";
//import { Navigate } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
// const onRedirectCallback = (appState) => Navigate(appState?.returnTo || "/");
root.render(
  <React.StrictMode>
    <CookiesProvider>
      <Provider store={store}>
        <Auth0Provider
          domain="ogura-shop-test.jp.auth0.com"
          clientId="ZpffmE8M5DOu8H1znlhml2UJ4Odk8DAf"
          redirectUri="https://www.ogura-shop.com/"
          // onRedirectCallback={onRedirectCallback}
          cacheLocation="localstorage"
        >
          {" "}
          <App />
        </Auth0Provider>
      </Provider>
    </CookiesProvider>
  </React.StrictMode>
);

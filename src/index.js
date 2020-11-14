import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Profile from "./pages/Profile";
// import Login from "./components/Login";
import App from './App';
import {Provider} from 'react-redux';
import * as serviceWorker from "./serviceWorker";
import {store, persistor} from './redux/store';
import {PersistGate} from 'redux-persist/integration/react';

const AppRedux = () => {
  return(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App/>
      </PersistGate>
  </Provider>
  )
}


ReactDOM.render(
  <React.StrictMode>
    <AppRedux/>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

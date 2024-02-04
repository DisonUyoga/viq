import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "remixicon/fonts/remixicon.css";
import App from "./App.jsx";
import store from "./redux/store.js";

axios.defaults.baseURL = "https://electronics233.pythonanywhere.com";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        closeOnClick
        pauseOnHover
        theme="dark"
      ></ToastContainer>

      <App />
    </Provider>
  </React.StrictMode>
);

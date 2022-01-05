import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import allQuestionReducer from "./service/Reducers/AllQuesReducer";
import CurrentQuestion from "./service/Reducers/CurrentQuestion";

const store = configureStore({
  reducer: {
    allQuestion: allQuestionReducer,
    currentQuestion: CurrentQuestion,
  },
});

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();

import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import reducer from "./reducers/reducer";

import "./styles.css";

import Input from "./component/Input/Input";
import List from "./component/List/List";
import FilterSelectors from "./component/FilterSelectors/FilterSelectors";

const store = createStore(reducer, window.devTools && window.devTools());
function App() {
  return (
    <div className="App">
      <h1>ToDo</h1>
      <Input />
      <List />
      <FilterSelectors />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);

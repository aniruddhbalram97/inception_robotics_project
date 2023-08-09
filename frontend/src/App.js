import React from "react";
import store from "./Redux/store";
import { Provider } from "react-redux";

import WrappedApp from "./WrappedApp";

import "./App.css";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <WrappedApp />
      </div>
    </Provider>
  );
}

export default App;

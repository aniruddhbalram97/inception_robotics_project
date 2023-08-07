import "./App.css";
import store from "./Redux/store";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Auth from "./Components/Authentication/Auth";
import Dashboard from "./Components/Dashboard/Dashboard";
import AllView from "./Components/Dashboard/AllView/AllView";
import Analytics from "./Components/Dashboard/Analytics/Analytics";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;

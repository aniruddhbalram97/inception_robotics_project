import "./App.css";
import store from "./Redux/store";
import { Provider } from "react-redux";
import Auth from "./Components/Authentication/Auth";
import Dashboard from "./Components/Dashboard/Dashboard";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <Auth /> */}
        <Dashboard />
      </div>
    </Provider>
  );
}

export default App;

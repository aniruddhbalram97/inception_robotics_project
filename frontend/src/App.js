import './App.css';
import store from './Redux/store';
import {Provider} from 'react-redux'
import Auth from './Components/Authentication/Auth';
function App() {
  return (
    <Provider store = {store}>
    <div className="App">
      <Auth/>
    </div>
    </Provider>
  );
}

export default App;

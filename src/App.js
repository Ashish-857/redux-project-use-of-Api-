import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import Cardmm from './cards';
import Cart from './cart';
import store from './redux/store';


function App() {
  return (
    <>
      <Provider store={store}>
      <div>
        <Cardmm />
        <Cart />
      </div>
    </Provider>
  
  </>
  );
}

export default App;


import { createStore } from 'redux';
import reducer from './cartReducer';

const store = createStore(reducer);

export default store;
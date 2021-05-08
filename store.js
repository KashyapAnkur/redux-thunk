import {createStore, combineReducers, applyMiddleware} from 'redux';
import CountReducer from './CountReducer';
import NameReducer from './NameReducer';
import thunk from 'redux-thunk';

const rootstore = combineReducers({count:CountReducer,name: NameReducer});
const store = createStore(rootstore,applyMiddleware(thunk));
export default store;
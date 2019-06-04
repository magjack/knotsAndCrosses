import { createStore,  } from "redux";
import { combineReducers } from 'redux';
import gameReducer from "./reducers/game";

const reducer = combineReducers({
  gameReducer
 });

export default function configureStore() {
  const store = createStore(reducer,{},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  return store;
}

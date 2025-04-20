import { combineReducers, legacy_createStore as createStore ,applyMiddleware} from "redux";
import clientReducer from "./reducers/clientReducer";
import productReducer from "./reducers/productReducer";
import shoppingCartReducer from "./reducers/shoppingCartReducer";
import logger from "redux-logger";
import { thunk } from 'redux-thunk';

const reducers = combineReducers({
  client: clientReducer,
  product: productReducer,
  cart: shoppingCartReducer,
});

export const store = createStore(reducers, applyMiddleware(logger, thunk));

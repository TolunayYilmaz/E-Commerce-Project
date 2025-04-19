import {combineReducers, legacy_createStore as createStore} from "redux";
import clientReducer from "./reducers/clientReducer";


const reducers=combineReducers({

    client:clientReducer
})

export const store =createStore(reducers);
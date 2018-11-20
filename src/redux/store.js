import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import contactReducer from "./contactReducer";
import logger from "redux-logger";

const rootReducer = combineReducers({
  contacts: contactReducer
});

export default () => createStore(rootReducer, applyMiddleware(thunk, logger));

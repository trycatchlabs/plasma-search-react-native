import { combineReducers } from "redux";
import bloodReducer from "./bloodReducer";
import oxygenReducer from "./oxygenReducer";
import AuthenticationReducer from "./Authentication";

export default combineReducers({
  bloodReducer,
  oxygenReducer,
  AuthenticationReducer,
});

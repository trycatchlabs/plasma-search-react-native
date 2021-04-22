import { combineReducers } from "redux";
import bloodReducer from "./bloodReducer";
import oxygenReducer from "./oxygenReducer";

export default combineReducers({
  bloodReducer,
  oxygenReducer,
});

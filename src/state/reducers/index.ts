import { combineReducers } from "redux";
import LocationReducer from "./location";

export default combineReducers({
  location: LocationReducer
});

import {combineReducers} from "redux";
import {questReducer} from "./questReducer";
import {stepsReducer} from "./stepsReducer";

export const rootReducer = combineReducers({
  questReducer,
  stepsReducer
})
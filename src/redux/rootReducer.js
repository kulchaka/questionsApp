import {combineReducers} from "redux";
import {questReducer} from "./questReducer";
import {stepsReducer} from "./stepsReducer";
import {inputReducer} from "./inputReducer";

export const rootReducer = combineReducers({
  questReducer,
  stepsReducer,
  inputReducer
})
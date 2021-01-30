import { combineReducers } from 'redux';
import { ActionOneReducer } from "./ActionOneReducer";
export const rootReducer = combineReducers({
  ActionOne: ActionOneReducer
});
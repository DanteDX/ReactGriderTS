import { combineReducers } from 'redux';
import { ActionOneReducer } from "./ActionOneReducer";
import { ActionTwoReducer } from "./ActionTwoReducer";
import { ActionThreeReducer } from "./ActionThreeReducer";
export const rootReducer = combineReducers({
  ActionOne: ActionOneReducer,
  ActionTwo: ActionTwoReducer,
  ActionThree: ActionThreeReducer
});
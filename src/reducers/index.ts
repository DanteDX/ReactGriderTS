import { combineReducers } from 'redux';
// importing reducers
import { ActionOneReducer } from "./ActionOneReducer";
import { ActionTwoReducer } from "./ActionTwoReducer";
import { ActionThreeReducer } from "./ActionThreeReducer";
// importing state types
import { CovidInfo } from "../actions/ActionOne";
import { ActionTwoPayloadInterface } from "../actions/ActionTwo";
import { ThreePayload } from "../actions/ActionThree";

export interface StoreState{
  ActionOne: CovidInfo[];
  ActionTwo: ActionTwoPayloadInterface[];
  ActionThree: ThreePayload[];
}

export const rootReducer = combineReducers<StoreState>({
  ActionOne: ActionOneReducer,
  ActionTwo: ActionTwoReducer,
  ActionThree: ActionThreeReducer
});
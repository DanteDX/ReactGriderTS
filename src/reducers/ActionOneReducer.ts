import { CovidInfo, ActionOneDispatch } from "../actions/ActionOne";
import { ActionTypes } from "../actions/ActionTypes";

const initialState = [{
  Confirmed: 0,
  Deaths: 0,
  Recovered: 0,
  Active: 0,
  Date: new Date()
}]


export const ActionOneReducer = (state: CovidInfo[] = initialState,action:ActionOneDispatch) => {
  switch (action.type) {
    case ActionTypes.ActionOne:
      return [
        ...state,
        ...action.payload
      ]
    default:
      return state;
  }
  
}
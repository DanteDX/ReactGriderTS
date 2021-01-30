import { ActionTypes } from "../actions/ActionTypes";
import { ThreePayload, ThreeDispatch } from "../actions/ActionThree";


const initialState = [{
  profession: "",
  gender: ""
}];

export const ActionThreeReducer = (state: ThreePayload[] = initialState, action: ThreeDispatch) => {
  switch (action.type) {
    case ActionTypes.ActionThree:
      return [
        ...state,
        action.payload
      ]
    default:
      return state
  }
};
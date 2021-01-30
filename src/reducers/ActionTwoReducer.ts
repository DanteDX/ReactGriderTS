import { ActionTypes } from "../actions/ActionTypes";
import { ActionTwoDispatchInterface, ActionTwoPayloadInterface } from "../actions/ActionTwo";


const initialState = [{
  name: "",
  age: ""
}];

export const ActionTwoReducer = (state: ActionTwoPayloadInterface[] = initialState, action: ActionTwoDispatchInterface) => {
  switch (action.type) {
    case ActionTypes.ActionTwo:
      return [
        ...state,
        action.payload
      ]
    default:
      return state
  }
}
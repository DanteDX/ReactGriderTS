import { ActionTypes } from "./ActionTypes";
import { Dispatch } from "redux";


export interface ActionTwoPayloadInterface{
  name: string;
  age: string;
}

export interface ActionTwoDispatchInterface{
  type: ActionTypes.ActionTwo;
  payload: ActionTwoPayloadInterface[];
}

export const ActionTwo = () => (dispatch: Dispatch) => {
  const info = [
    { name: 'shadman', age: '20' },
    { name: 'martin', age: '40' },
    { name: 'piyal', age: '33'}
  ]
  dispatch<ActionTwoDispatchInterface>({
    type: ActionTypes.ActionTwo,
    payload: info
  })
};
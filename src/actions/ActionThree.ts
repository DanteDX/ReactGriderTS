import { ActionTypes } from "./ActionTypes";
import { Dispatch } from 'redux';

export interface ThreePayload{
  profession: string;
  gender: string;
}

export interface ThreeDispatch{
  type: ActionTypes.ActionThree;
  payload: ThreePayload[];
}

export const ActionThree = () => (dispatch: Dispatch) => {
  const info = [
    { profession: 'web developer', gender: 'male' },
    { profession: 'engineer', gender: 'female' },
    { profession: 'scientist', gender: 'male' }
  ];
  dispatch<ThreeDispatch>({
    type: ActionTypes.ActionThree,
    payload: info
  })
}
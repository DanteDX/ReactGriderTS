import { ActionTypes } from "./ActionTypes";
import { Dispatch } from "redux";
import axios from "axios";

interface CovidInfo{
  Confirmed: number;
  Deaths: number;
  Recovered: number;
  Active: number;
  Date: Date;
}

interface ActionOneDispatch{
  type: ActionTypes.ActionOne;
  payload: CovidInfo[];
}

export const ActionOne = () => async (dispatch: Dispatch) => {
  try {
    const res = await axios.get<CovidInfo[]>("https://api.covid19api.com/total/dayone/country/bangladesh");
    const responseData = res.data;
    dispatch<ActionOneDispatch>({
      type: ActionTypes.ActionOne,
      payload: responseData
    })

  }catch(err){
    return err;
  }
};
import { put } from "redux-saga/effects";
import {  setAccountsError, setAccountsSuccess } from "../accountsSlice";
import { signInAccountApi } from "@/app/redux/signInAccountApi";

type Action ={
  payload :{
    email: string,
    password:string;
  }
}

export function* signInAccountsSaga(action:Action) {
    try {
      const payload = yield signInAccountApi(action);
       yield put(setAccountsSuccess(action.payload))
    } catch (error) {
      yield put(setAccountsError(error.message));
    }
  }


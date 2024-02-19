import { takeEvery } from "redux-saga/effects";
import { getSignInAccountsRequest, getSignUpAccountsRequest } from "./reducers/accountsSlice";
import { signUpAccountsSaga } from "./reducers/sagas/signUpAccountsSaga";
import { signInAccountsSaga } from "./reducers/sagas/signInAccountsSaga";
import { GET_ROOMS, getRoomsSaga } from "./reducers/roomsSlice";

export function* rootSaga() {
    yield takeEvery(getSignUpAccountsRequest, signUpAccountsSaga);
    yield takeEvery(getSignInAccountsRequest, signInAccountsSaga)
    yield takeEvery(GET_ROOMS, getRoomsSaga);
  }
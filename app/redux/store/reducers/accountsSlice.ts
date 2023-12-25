import exp from "constants";
import { IAccounts } from "../../../module";
import { createAction, createSlice } from "@reduxjs/toolkit";
import { put } from "redux-saga/effects";
import { getAccountsApi } from "../../getAccountsApi";

interface AccountsState {
  accounts: IAccounts[];
  isLoading: boolean;
  error?: string;
  count: number;
}

export function* getAccountsSaga(): any {
  const payload = yield getAccountsApi().then((response: any) =>
    response.map((item: any) => item)
  );
  yield put(getAccountsSuccess(payload));
}

const initialState: AccountsState = {
  accounts: [],
  isLoading: false,
  error: "",
  count: 0,
};

export const accountSlice: any = createSlice({
  name: "account",
  initialState,
  reducers: {
    getAccountsSuccess: (state, action) => {
      state.accounts = action.payload;
    },
  },
});

export const GET_ACCOUNTS = "account/GetAccounts";
export const getAccounts = createAction(GET_ACCOUNTS);

export const { getAccountsSuccess } = accountSlice.actions;

export default accountSlice.reducer;

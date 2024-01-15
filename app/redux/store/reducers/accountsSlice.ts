import { createAction, createSlice } from "@reduxjs/toolkit";
import { IAccounts } from "../../../module";

interface AccountsState {
  accounts: IAccounts;
  error?: string;
}

const initialState: AccountsState = {
  accounts: {},
  error: "",

};

export const accountSlice: any = createSlice({
  name: "account",
  initialState,
  reducers: {
    setAccountsSuccess: (state, action) => {
      state.accounts.email = action.payload.email;
      state.accounts.token = action.payload.stsTokenManager
      .token;
      state.accounts.id = action.payload.uid;
    },
    setAccountsError: (state, action) => {
      state.error = action.payload.error;
    },
    removeAccount: (state) =>{
      state.accounts = {}
      localStorage.removeItem('email') 
    },
    authenticateUser:(state)=>{
      const userEmail = localStorage.getItem('email');
      if (userEmail) {
        state.accounts = { email: userEmail };
      }
    }
  },
});

export const SIGN_UP_ACCOUNT = "account/signUpAccount";
export const signUpAccount = createAction(SIGN_UP_ACCOUNT, (payload) => {
  return {
    payload,
  };
});

export const SIGN_IN_ACCOUNT = "account/signInAccount";
export const signInAccount = createAction(SIGN_IN_ACCOUNT, (payload) => {
  return {
    payload,
  };
});


export const { setAccountsSuccess, setAccountsError, removeAccount, authenticateUser } = accountSlice.actions;

export default accountSlice.reducer;

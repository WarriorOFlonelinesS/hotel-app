import {  signInWithEmailAndPassword } from "@firebase/auth";
import { auth } from "../../firebase";
import { rememberUser } from "./rememberUser";

type Action = {
  email: string,
  password: string,
  remember:boolean
}

export const signInAccountApi = async (action: { payload: Action; }) => {
  const {email, password, remember} = action.payload
  if(remember){
    rememberUser(action.payload.email)
  }
  try {
    signInWithEmailAndPassword(auth, email, password)

  } catch {
    console.log("Error");
  }
};

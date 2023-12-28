"use client"
import { useAppSelector, useAppDispatch } from "./hooks";
import { getAccounts } from "./redux/store/reducers/accountsSlice";
import Image from "next/image";
import { getRoomsApi } from "./redux/getRoomsApi";
import { getRooms } from "./redux/store/reducers/roomsSlice";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
export default function Home() {


  
  
  return (
    <>
      <Header />
      <Main />
    </>
  )
}

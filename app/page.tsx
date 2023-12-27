"use client"
import { useAppSelector, useAppDispatch } from "./hooks";
import { getAccounts } from "./redux/store/reducers/accountsSlice";
import Image from "next/image";
import { getRoomsApi } from "./redux/getRoomsApi";
import { getRooms } from "./redux/store/reducers/roomsSlice";
export default function Home() {

  const dispatch = useAppDispatch()
  const { accounts } = useAppSelector(state => state.accountReducer)
  const { rooms } = useAppSelector(state => state.roomsReducer)
  return (
    <main >
      
    </main>
  )
}

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
      <div>
        {accounts.map((item: { password: string, image: string }) => {
          return (
            <div>
              <p>{item.password}</p>
              <Image width={100} height={100} src={item.image} alt="avatar"></Image>
            </div>)
 
        })
        }
      </div>
      {/* <div>
        {rooms.gallery.map(image =>{return(<Image width={100} height={100} src={image} alt="avatar"></Image>)})}
      </div> */}
      {
        console.log(rooms)
      }
      <button onClick={() => { dispatch(getAccounts()) }}>GET ACCOUNTS</button>
      <button onClick={() => { dispatch(getRooms()) }}>GET ROOMS</button>
    </main>
  )
}

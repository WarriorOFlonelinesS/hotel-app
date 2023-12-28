import { useEffect } from "react"
import { getAccounts } from "../redux/store/reducers/accountsSlice"
import { useAppDispatch, useAppSelector } from "../hooks"
import { ListOfRooms } from "./ListOfRooms"
import { getRooms } from "../redux/store/reducers/roomsSlice"

export const Main = () => {
  
    const { rooms } = useAppSelector(state => state.roomsReducer)
    const sortedRooms = rooms.map((room: { [x: string]: any; docId: string | number }) => room[room.docId]).sort((a: { number: number },b: { number: number }) => a.number - b.number)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getRooms())
    }
        , [dispatch])
    return (
        <div className="main">
            <div className="container">
                {rooms.length > 0
                    && <table className="main-table">
                        <tbody>
                            <tr  className="table-tr table-tr_header">
                                <th className="table__header">Number</th>
                                <th className="table__header">Type</th>
                                <th className="table__header">Occupancy</th>
                                <th className="table__header table__header_center">Price</th>
                                <th className="table__header table__header_right">Guest</th>
                                <th className="table__header"></th>
                            </tr>
                            {rooms.length > 0 && sortedRooms.slice(0,10).map((room: any) => (<ListOfRooms room={room} key={room.docId} />))}
                        </tbody>
                    </table>
                }
            </div>
        </div>
    )
}
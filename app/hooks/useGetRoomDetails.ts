import { useEffect } from "react"
import { getRooms } from "../redux/store/reducers/roomsSlice"
import { useAppDispatch, useAppSelector } from "../hooks"

export const useGetRoomDetails = () => {
    const { rooms } = useAppSelector(state => state.roomsReducer)

    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getRooms())
    }
        , [dispatch])
    return rooms
}
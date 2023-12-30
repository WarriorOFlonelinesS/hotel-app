import { useEffect } from "react"
import { getRooms } from "../redux/store/reducers/roomsSlice"
import { useAppDispatch } from "../hooks"

export const useGetRooms = () => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getRooms())
    }
        , [dispatch])
}
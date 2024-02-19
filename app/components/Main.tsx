
import { SetStateAction, useCallback, useState } from "react";
import { useAppSelector } from "../hooks";
import { Pagination } from "./Pagination";
import { useGetRooms } from "../hooks/useGetRooms";
import TableRooms from "./TableRooms";
import { TDocument } from "./rooms/[id]/page";
import { TRoom } from "./types";

export const Main = () => {
    const [freeRooms, setFreeRooms] = useState(false)
    const { rooms } = useAppSelector(state => state.roomsReducer)
    const [currentPage, setCurrentPage] = useState(1);
    const [roomsPerPage] = useState(10);

    const paginate = (pageNumber: SetStateAction<number>): void => setCurrentPage(pageNumber);
    const handler = useCallback(() => {
        setFreeRooms(!freeRooms);
    }, []);
    const lastRoomIndex = currentPage * roomsPerPage;
    const firstRoomIndex = lastRoomIndex - roomsPerPage;

    const sortedRooms = rooms.map((room: { [x: string]: any; docId: string | number }) => room[room.docId]).sort((a: { number: number }, b: { number: number }) => a.number - b.number);
    const currentRooms = sortedRooms.slice(firstRoomIndex, lastRoomIndex);
    const roomsId = rooms
        .filter((room:TRoom) => room.docId !== null)
        .map((room:TDocument) => room.docId as string)
        .sort((a:number, b:number) => {
            const roomA = rooms.find((room:TRoom) => room.docId === a);
            const roomB = rooms.find((room:TRoom) => room.docId === b);
            if (roomA && roomB) {
                return roomA.number - roomB.number;
            }
            return 0;
        })
        .slice(firstRoomIndex, lastRoomIndex);


    const nextPage = () => {
        setCurrentPage((prev) => (prev === Math.ceil(rooms.length / roomsPerPage) ? 1 : prev + 1));

    };

    const prevPage = () => {
        setCurrentPage((prev) => (prev === 1 ? Math.ceil(rooms.length / roomsPerPage) : prev - 1));
    };

    useGetRooms();
    const tableParams = {
        rooms: currentRooms,
        roomId: roomsId,
        freeRooms: freeRooms
    }
    return (
        <div className="main">
            <div className="container">
                <div className="main-filter">
                    <button className="btn btn_item" onClick={() => setFreeRooms(false)}>Clear all filters</button>
                    <input type="checkbox" checked={freeRooms} onChange={handler} />
                    <label htmlFor="check1" >Free rooms only</label>
                </div>
                <TableRooms {...tableParams} />
                <div className="main-pagination">
                    <button className="btn btn_pagination" onClick={prevPage}>&lt;</button>
                    <Pagination
                        roomsPerPage={roomsPerPage}
                        totalRooms={rooms.length}
                        paginate={paginate}
                    />
                    <button className="btn btn_pagination" onClick={nextPage}>&gt;</button>
                </div>
            </div>
        </div>
    )
}
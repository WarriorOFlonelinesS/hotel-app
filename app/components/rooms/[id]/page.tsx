'use client'
import Image from "next/image";
// import Home from "../../../../public/Home.svg"
import { useRouter } from "next/navigation";
import { useGetRoomDetails } from "../../../hooks/useGetRoomDetails";

type Props = {
    params: {
        id: string,
    }
}

export default function RoomPage({ params: { id } }: Props) {
    const router = useRouter();

    const roomData = (useGetRoomDetails().find(room => room.docId === id))
    return (
        roomData
        &&
        <div className="room">
            <div className="container">
                <button onClick={() => router.push('/')} className="link__btn">
                    <span className="link__img">&lt;</span> Back Home
                </button>
                <div className="room-sides">
                    <div className="room-left">
                        <Image className="room" width={1018} height={561} src={roomData[id].gallery[0]} alt="room" />
                        <div className="room-characteristics">
                            <h1 className="characteristics__header">Room {roomData[id].number}</h1>
                            <ul className="characteristics-list">
                                <li><strong>Type:</strong> {roomData[id].type}</li>
                                <li><strong>Ocupancy:</strong> {roomData[id].type}</li>
                                <li><strong>Price:</strong> {roomData[id].price}</li>
                                <li><strong>Guest:</strong> {roomData[id].guest}</li>
                            </ul>
                        </div>
                    </div>
                    <div className="room-right">
                        <div className="room-buttons">
                            <button className="btn btn_check-in">Check in</button>
                            <button className="btn btn_check-out">Check out</button>
                        </div>
                        <ul className="room-features">
                            <p className="features__header">Features:</p>
                            {roomData[id].features.map(feature => {
                                return (
                                    <li>{feature}</li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
                <div className="room-down">
                    <div className="room-header room-header_description">
                        Desctiption:
                    </div>
                    <div className="room__description">
                        {roomData[id].description}
                    </div>
                </div>
            </div>
        </div>
    )
}
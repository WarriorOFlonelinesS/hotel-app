'use client'
'@refresh reset'
import Image from "next/image";

import { useRouter } from "next/navigation";
import { useGetRoomDetails } from "../../../hooks/useGetRoomDetails";
import { Modal } from "../../Modal";
import { useEffect, useState } from "react";
import { CheckOut } from "../../CheckOut";
import { CheckIn } from "../../СheckIn";
import { TRoom } from "../../types";

type Props = {
    params: {
        id: string,
    }
}

export type TDocument = {
    docId: string | null
    room: TRoom
}

export default function RoomPage({ params: { id } }: Props) {
    const router = useRouter();
    const [data, setData] = useState<React.ReactNode | null>(null)
    const [modalVisible, setModalVisible] = useState(false);
    const [roomData, setRoomData] = useState({});

    const room = useGetRoomDetails();
    const roomDetails = room.find((room: TDocument)=> room.docId === id);

    useEffect(() => {
        if (roomDetails) {
            setRoomData(roomDetails);
        }
    }, [roomDetails]);

    const openCheckIn = () => {
        setModalVisible(true);
        setData(<CheckIn roomId={id} room={roomData} closeModal={setModalVisible} />)
    };

    const openCheckOut = () => {
        setModalVisible(true);
        setData(<CheckOut roomId={id} room={roomData} closeModal={setModalVisible} />)
    }

    const closeModal = () => {
        setModalVisible(false);
    };

    return (
        roomDetails
        &&
        <div className="room">
            <div className="container">

                <button onClick={() => router.push('/')} className="link__btn">
                    <span className="link__img">&lt;</span> Back Home
                </button>
                <div className="room-sides">
                    <div className="room-left">
                        <Image className="room" width={1018} height={561} src={roomDetails[id].gallery[0]} alt="room" />
                        <div className="room-characteristics">
                            <h1 className="characteristics__header">Room {roomDetails[id].number}</h1>
                            <ul className="characteristics-list">
                                <li><strong>Type:</strong> {roomDetails[id].type}</li>
                                <li><strong>Occupancy:</strong> {roomDetails[id].occupancy}</li>
                                <li><strong>Price:</strong> {roomDetails[id].price}</li>
                                <li><strong>Guest:</strong> {roomDetails[id].guest}</li>
                            </ul>
                        </div>
                    </div>
                    <div className="room-right">
                        <div className="room-buttons">
                            <button className="btn btn_check-in" onClick={openCheckIn}>Check in</button>
                            <button className="btn btn_check-out" onClick={openCheckOut}>Check out</button>
                            <Modal showModal={modalVisible}  closeModal={closeModal}>
                                {data}
                            </Modal>
                        </div>
                        <ul className="room-features">
                            <p className="features__header">Features:</p>
                            {roomDetails[id].features.map((feature:TRoom['features']) => {
                                return (
                                    <li key={id} className="features-item">{feature}</li>
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
                        {roomDetails[id].description}
                    </div>
                </div>
            </div>
        </div>
    )
}
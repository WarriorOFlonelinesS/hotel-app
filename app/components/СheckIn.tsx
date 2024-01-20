import { DatePicker, DatePickerProps, Input } from "antd";
import { UserOutlined } from '@ant-design/icons';
import { useState } from "react";
import { db } from "@/firebase";

export const CheckIn = ({ roomId, room, closeModal }: any) => {
    const [checkOutDate, setCheckOutDate] = useState('');
    const [checkInDate, setCheckInDate] = useState('');
    const [name, setName] = useState('');

    const onChangeChekInDate: DatePickerProps['onChange'] = (date, dateString) => {
        setCheckInDate(dateString)
    };

    const onChangeChekOutDate: DatePickerProps['onChange'] = (date, dateString) => {
        setCheckOutDate(dateString)
    };

    const sendData = async (roomId: any) => {
        const roomDetails = room[roomId]
        db.collection('room').doc(roomId).update(
            {
                [roomId]: {
                    number: roomDetails.number,
                    type: roomDetails.type,
                    occupancy: roomDetails.occupancy,
                    isCheckedIn: true,
                    checkInDate: checkInDate,
                    price: roomDetails.price,
                    guest: name,
                    features: roomDetails.features,
                    gallery: roomDetails.gallery,
                    description: roomDetails.description,
                    checkOutDate: checkOutDate
                }
            }
        )
        closeModal(false)
    };

    return (
        <div className="check-in">
            <p className="check-in__header" >Check In</p>
            <p>* Please enter the guest's name:</p>
            <Input
                className="input__guest"
                rules={[{ required: true, message: "Please enter the guest's name!" }]}
                placeholder="Guest's Name"
                prefix={<UserOutlined className="site-form-item-icon" />}
                onChange={(e) => setName(e.target.value)}
            />
            <p>Please, enter the approximate date of guest check in:</p>
            <DatePicker className="input__date" onChange={onChangeChekInDate} />
            <p>Please, enter the approximate date of guest check in:</p>
            <DatePicker className="input__date" onChange={onChangeChekOutDate} />
            <div className="check-in-buttons">
                <button className="btn_item check-in__btn_cancel" onClick={() => closeModal(false)}>
                    Cancel
                </button>
                <button className="btn_item check-in__btn_check-in" onClick={() => { sendData(roomId) }}>
                    Check in
                </button>
            </div>
        </div>
    );
};

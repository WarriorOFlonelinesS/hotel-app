import { DatePicker, DatePickerProps, Input } from "antd";
import { UserOutlined } from '@ant-design/icons';
import { useState } from "react";
import { db } from "@/firebase";
import { number } from "prop-types";

export const CheckIn = ({ roomId, room }) => {
    const [checkOutDate, setCheckOutDate] = useState('');
    const [name, setName] = useState('');
    const onChange: DatePickerProps['onChange'] = (date, dateString) => {
        setCheckOutDate(dateString)
    };


    const sendData = async (roomId) => {
        const roomDetails = room[roomId]
        db.collection('room').doc(roomId).update(
            {
                [roomId]: {
                    number: roomDetails.number,
                    type: roomDetails.type,
                    occupancy: roomDetails.occupancy,
                    isCheckedIn: true,
                    checkInDate: roomDetails.checkInDate,
                    price: roomDetails.price,
                    guest: name,
                    features: roomDetails.features,
                    gallery: roomDetails.gallery,
                    description: roomDetails.description,
                    checkOutDate: checkOutDate
                }
            }
        )



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
            <p>Please, enter the approximate date of guest checkout:</p>
            <DatePicker onChange={onChange} />
            <div className="check-in-buttons">
                <button className="btn_item check-in__btn_cancel">
                    Cancel
                </button>
                <button className="btn_item check-in__btn_check-in" onClick={() => { sendData(roomId) }}>
                    Check in
                </button>
            </div>
        </div>
    );
};

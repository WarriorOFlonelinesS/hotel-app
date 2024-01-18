import { DatePicker, DatePickerProps, Input } from "antd";
import { UserOutlined } from '@ant-design/icons';
import { useState } from "react";
import { db } from "@/firebase";

export const CheckIn = ({ roomId }) => {
    const [date, setDate] = useState('');
    const [name, setName] = useState('');
    const onChange: DatePickerProps['onChange'] = (date, dateString) => {
        console.log(dateString)
    };


    const sendName = async (roomId) => {
        const id = roomId.roomId;
        const roomRef = db.ref(`room/${id}`);

        roomRef.update({
            guest: 'Новий гість',
            isCheckedIn: true
        })
        .then(() => {
            console.log('Дані успішно оновлені.');
        })
        .catch((error: string) => {
            console.error('Помилка при оновленні даних:', error);
        });
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
                <button className="btn_item check-in__btn_check-in" onClick={() => sendName(roomId)}>
                    Check in
                </button>
            </div>
        </div>
    );
};

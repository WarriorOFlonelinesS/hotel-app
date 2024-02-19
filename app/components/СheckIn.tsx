import { DatePicker, Input, Form } from "antd";
import { UserOutlined } from '@ant-design/icons';
import { useState } from "react";
import { db } from "@/firebase";

export const CheckIn = ({ roomId, room, closeModal }: any) => {
    const [form] = Form.useForm();
    const [checkOutDate, setCheckOutDate] = useState('');
    const [checkInDate, setCheckInDate] = useState('');
    const [name, setName] = useState('');

    const onChangeChekInDate = (date: any, dateString: string) => {
        setCheckInDate(dateString)
    };

    const onChangeChekOutDate = (date: any, dateString: string) => {
        setCheckOutDate(dateString)
    };

    const onFinish = async () => {
        try {
            const values = await form.validateFields();
            const roomDetails = room[roomId];
            await db.collection('room').doc(roomId).update({
                [roomId]: {
                    ...roomDetails,
                    isCheckedIn: true,
                    checkInDate,
                    checkOutDate,
                    guest: name
                }
            });
            closeModal(false);
        } catch (error) {
            console.error('Validation failed:', error);
        }
    };

    return (
        <div className="check-in">
            <p className="check-in__header">Check In</p>
            <Form form={form} onFinish={onFinish}>
                <Form.Item
                    name="guestName"
                    rules={[{ required: true, message: "Please enter the guest's name!" }]}
                >
                    <Input
                        className="input__guest"
                        placeholder="Guest's Name"
                        prefix={<UserOutlined className="site-form-item-icon" />}
                        onChange={(e) => setName(e.target.value)}
                    />
                </Form.Item>
                <p>Please, enter the approximate date of guest check in:</p>
                <DatePicker className="input__date" onChange={onChangeChekInDate} />
                <p>Please, enter the approximate date of guest check out:</p>
                <DatePicker className="input__date" onChange={onChangeChekOutDate} />
                <div className="check-in-buttons">
                    <button className="btn_item check-in__btn_cancel" onClick={() => closeModal(false)}>
                        Cancel
                    </button>
                    <button className="btn_item check-in__btn_check-in"  type="submit">
                        Check in
                    </button>
                </div>
            </Form>
        </div>
    );
};

import { DatePicker, DatePickerProps, Input } from "antd";
import { UserOutlined } from '@ant-design/icons';
import { useState } from "react";
export const CheckIn = () => {
    const [date, setDate] = useState('')
    const onChange: DatePickerProps['onChange'] = (date, dateString) => {
        console.log(date, dateString);
    };
    console.log(date)
    return (
        <div className="check-in">
            <p className="check-in__header">Check In</p>

            <p>* Please enter the guest's name:</p>
            <Input
                className="input__guest"
                rules={[{ required: true, message: "Please enter the guest's name!" }]}
                placeholder="Guest's Name"
                prefix={<UserOutlined className="site-form-item-icon" />}
            />
            <p>Please, enter the approximate date of guest checkout:</p>
            <DatePicker onChange={onChange} />
            <div className="check-in-buttons">
                <button className="btn_item check-in__btn_cancel">
                    Cancel
                </button>
                <button className="btn_item check-in__btn_check-in">
                    Check in
                </button>
            </div>
        </div>
    )
}
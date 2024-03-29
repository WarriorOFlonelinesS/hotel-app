'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAppDispatch } from '../hooks';
import { Button, Checkbox, Form, Input } from 'antd';
import { getSignUpAccountsRequest } from '../redux/store/reducers/accountsSlice';

export default function Signup() {
  const dispatch = useAppDispatch()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordAgain, setPasswordAgain] = useState('');
  const [remember, setRemember] = useState(true);
  const router = useRouter()
  const signup = () => {
    dispatch(getSignUpAccountsRequest({
      email: email,
      password: password,
      remember:remember
    }))
    router.push('/')
  }
  return (
    <div className='sign-in'>
      <div className='sign-in-content'>

        <Form
          name="basic"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 16 }}
          style={{ width: 600, backgroundColor: 'white' }}
          initialValues={{ remember: true }}
          autoComplete="off"
          onSubmitCapture={signup}
        >
          <h4>
            Registration
          </h4>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input onChange={(e) => { setEmail(e.target.value) }} />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password onChange={(e) => { setPassword(e.target.value) }} />
          </Form.Item>

          <Form.Item
            label="Password again"
            name="passwordAgain"
            rules={[{ required: true, message: 'Please input your password again!' }]}
          >
            <Input.Password onChange={(e) => { setPasswordAgain(e.target.value) }} />
          </Form.Item>
          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 1, span: 16 }}
          >
            <Checkbox  onClick={()=>setRemember(!remember)}>Remember me</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 10, span: 16 }}>
            <Button disabled={password === '' || email === ''} type="primary" htmlType="submit" >
              Submit
            </Button>
          </Form.Item>
          <p>
            if you have an account <span className='link' onClick={() => { router.push('/signin') }}>Log in</span>
          </p>
        </Form>
      </div>
    </div>
  )
}



// Import necessary libraries and modules
'use client'
import { useState } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { useRouter } from 'next/navigation';
import { signInAccount } from '../redux/store/reducers/accountsSlice';
import { useAppDispatch } from '../hooks';

// Define your functional component
const SignIn = () => {
  const dispatch = useAppDispatch()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(true);
  const router = useRouter()
console.log(remember)
  const signIn = async () => {
    dispatch(signInAccount({
      email: email,
      password: password,
      remember:remember
    }))
    router.push('/')
  };

  // JSX for the component
  return (
    <div className='sign-in'>
      <div className='sign-in-content'>

        <Form
          name="basic"
          labelCol={{ span: 4}}
          wrapperCol={{ span: 16 }}
          style={{ width: 600, backgroundColor: 'white'}}
          initialValues={{ remember: true }}
          autoComplete="off"
          onSubmitCapture={signIn}
        >
          <h4>
            Authentication
          </h4>
          <Form.Item<FieldType>
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}

          >
            <Input onChange={(e) => { setEmail(e.target.value) }} />
          </Form.Item>

          <Form.Item<FieldType>
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password onChange={(e) => { setPassword(e.target.value) }} />
          </Form.Item>

          <Form.Item<FieldType>
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 1, span: 16 }}
          >
            <Checkbox onClick={()=>setRemember(!remember)}>Remember me</Checkbox>
            
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 10, span: 16 }}>
            <Button disabled={password === '' || email === ''} type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
          if you don't have an account <span onClick={()=>{router.push('/signup')}}>Sign up</span>
        </Form>
      </div>
    </div>
  )
};

export default SignIn;

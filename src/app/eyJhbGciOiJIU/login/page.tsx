'use client';

import {
  Button, Form, Input,
  notification,
} from 'antd';
import { useRouter } from 'next/navigation';
import { useAuthContext } from '../_provider/AuthProvider';
import { usePostLogin } from '../_hooks/useLogin';
import { ADMIN_PAGE_ROUTE } from '../_constants';

type FieldType = {
  email?: string;
  password?: string;
};

const AdminLogin = () => {
  const { setRawAccessToken } = useAuthContext();
  const { mutate } = usePostLogin();

  const router = useRouter();

  const [api, contextHolder] = notification.useNotification();

  const handleOnSubmit = (value: FieldType) => {
    mutate(
      { email: value.email as string, password: value.password as string },
      {
        onSuccess: (serverResponse) => {
          const userToken = serverResponse.data.idToken;
          setRawAccessToken(userToken);
          api['success']({
            message: 'Login Success',
            description:
              'Login success will redirect to homepage',
          });
          router.push(`/${ADMIN_PAGE_ROUTE}`);
        },
        onError: () => {
          api['error']({
            message: 'Login Failed',
            description:
              'Email or password is not correct',
          });
        },
      },
    );
  };
  return (
    <div className="flex justify-center items-center h-screen">
      {contextHolder}
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={handleOnSubmit}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="email"
          name="email"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AdminLogin;

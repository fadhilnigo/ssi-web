'use client';

import Image from 'next/image';
import {
  Button,
  Form,
  Input,
} from 'antd';
import { useRouter } from 'next/navigation';
import SSILogo from '~/@shared/_assets/png/ssi_icon_footer.png';
import { useAuthContext } from '../_provider/AuthProvider';
import { usePostLogin } from '../_hooks/useLogin';
import { EPaths } from '../_constants';
import { usePopUpContext } from '../_provider/PopUpProvider';

type FieldType = {
  email?: string;
  password?: string;
};

const AdminLogin = () => {
  const { setRawAccessToken } = useAuthContext();
  const { showNotification } = usePopUpContext();
  const { mutate } = usePostLogin();

  const router = useRouter();

  const handleOnSubmit = (value: FieldType) => {
    mutate(
      { email: value.email as string, password: value.password as string },
      {
        onSuccess: (serverResponse) => {
          const userToken = serverResponse.data.idToken;
          setRawAccessToken(userToken);
          showNotification['success']({
            message: 'Login Success',
            description:
              'Login success will redirect to homepage',
          });
          router.push(EPaths.ADMIN);
        },
        onError: () => {
          showNotification['error']({
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
      <div className="flex flex-col w-[60%] items-center">
        <div className="relative w-[50%] aspect-[5/2] mb-12">
          <Image
            src={SSILogo}
            alt="ssi logo"
            className="rounded-lg"
            fill
          />
        </div>
        <Form
          name="basic"
          layout="vertical"
          className="w-full"
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

          <Button
            type="primary"
            htmlType="submit"
            className="w-full bg-backgroundPrimary"
          >
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default AdminLogin;

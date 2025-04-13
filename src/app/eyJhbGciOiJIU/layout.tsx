// This admin page is target to be separated from the main web repo
// Because the time constraint admin page temporary included in this repo

'use client';

import Image from 'next/image';
import {
  Button,
  Layout, Menu, MenuProps,
} from 'antd';
import SSIIcon from '~/@shared/_assets/png/ssi_icon.png';
import { DesktopOutlined } from '@ant-design/icons';
import { ReactNode, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import AuthProvider, { useAuthContext } from './_provider/AuthProvider';
import { EPaths } from './_constants';
import PopUpProvider from './_provider/PopUpProvider';

const { Header, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Articles', EPaths.ADMIN, <DesktopOutlined />),
];

const ButtonLogout = () => {
  const { handleLogout } = useAuthContext();
  return (
    <Button
      className="bg-red-500"
      type="primary"
      htmlType="submit"
      onClick={handleLogout}
    >
      Logout
    </Button>
  );
};

const IconSection = () => {
  const { userInfo } = useAuthContext();
  return (
    <div className="flex gap-4 items-center">
      <div>
        <div className="relative w-[7.75rem] md:w-[7rem] aspect-[218/92]">
          <Image
            src={SSIIcon}
            alt="SSI icon"
            fill
          />
        </div>
      </div>

      <p className="text-white text-base font-bold">
        Hi,
        {' '}
        {userInfo?.user.email}
        !
      </p>
    </div>
  );
};

const PageContent = ({ children }: { children: ReactNode }) => {
  const [collapsed, setCollapsed] = useState(true);

  const pathname = usePathname();
  const router = useRouter();
  const isLoginPage = pathname.endsWith('/login');

  if (isLoginPage) {
    return (
      <main className="min-h-[calc(100vh-9.8rem)]">
        {children}
      </main>
    );
  }

  return (
    <Layout>
      <Header className="bg-backgroundPrimary flex items-center justify-between">
        <IconSection />
        <ButtonLogout />
      </Header>
      <Layout>
        <Sider
          theme="light"
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          <Menu
            defaultSelectedKeys={[EPaths.ADMIN]}
            mode="inline"
            onClick={(e) => { router.push(e.key); }}
            items={items}
          />
        </Sider>
        <Layout className="p-8 min-h-[100vh-9rem]">
          {children}
        </Layout>
      </Layout>
    </Layout>
  );
};

const AdminLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <AuthProvider>
    <PopUpProvider>
      <PageContent>
        {children}
      </PageContent>
    </PopUpProvider>
  </AuthProvider>
);

export default AdminLayout;

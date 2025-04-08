import AuthProvider from './_provider/AuthProvider';

const AdminLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <AuthProvider>
    <main className="min-h-[calc(100vh-9.8rem)]">
      {children}
    </main>
  </AuthProvider>
);

export default AdminLayout;

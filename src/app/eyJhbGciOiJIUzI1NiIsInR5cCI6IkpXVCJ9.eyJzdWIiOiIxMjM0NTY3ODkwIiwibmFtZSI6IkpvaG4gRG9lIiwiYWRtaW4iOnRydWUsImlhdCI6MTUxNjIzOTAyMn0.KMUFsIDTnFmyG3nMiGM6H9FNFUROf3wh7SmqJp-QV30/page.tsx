'use client';

import { Button, Table } from 'antd';
import { useRouter } from 'next/navigation';
import { useGetArticleList } from './_hooks/useGetArticleList';
import { ADMIN_PAGE_ROUTE } from './_constants';

const AdminPage = () => {
  const { data } = useGetArticleList();

  const router = useRouter();

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Author',
      dataIndex: 'author',
      key: 'author',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
  ];

  if (!data) {
    return <p>Loading!</p>;
  }

  return (
    <div className="content-wrapper">
      <Button
        type="primary"
        htmlType="button"
        onClick={() => router.push(`/${ADMIN_PAGE_ROUTE}/create`)}
      >
        Create Article
      </Button>
      <Table dataSource={data.data.articles} columns={columns} />
    </div>
  );
};

export default AdminPage;

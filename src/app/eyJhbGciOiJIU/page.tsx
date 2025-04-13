'use client';

import { Button, Pagination, Table } from 'antd';
import { useRouter } from 'next/navigation';
import {
  Button as ButtonComponent,
  Input,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '~/@shared/_components/ui';
import { KeyboardEvent, useEffect, useState } from 'react';
import { EPaths } from './_constants';
import ArticleProvider, { useArticleContext } from './_provider/ArticleProvider';
import { usePopUpContext } from './_provider/PopUpProvider';
import DeleteArticleButton from './_components/DeleteArticleButton';

const FilterSection = () => {
  const { params, setParams } = useArticleContext();

  const [search, setSearch] = useState(params.search);

  const selectValueMap = () => {
    if (params.sort === 'desc' && params.sortBy === 'update') {
      return 'latest';
    }
    if (params.sort === 'asc' && params.sortBy === 'update') {
      return 'oldest';
    }
    return '';
  };

  const hanldeSortBy = (v: string) => {
    if (v === 'latest') {
      setParams((prev) => ({
        ...prev,
        sortBy: 'update',
        sort: 'desc',
      }));
    }

    if (v === 'oldest') {
      setParams((prev) => ({
        ...prev,
        sortBy: 'update',
        sort: 'asc',
      }));
    }
  };

  const handleSearch = () => {
    setParams((prev) => ({
      ...prev,
      search,
    }));
  };

  const handlePressEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key.toLowerCase() === 'enter') {
      handleSearch();
    }
  };

  return (
    <div className="flex justify-between">
      <div>
        <Select
          onValueChange={hanldeSortBy}
          value={selectValueMap()}
        >
          <SelectTrigger className="w-60">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {/* <SelectItem value="popular">Popular</SelectItem> */}
              <SelectItem value="latest">Latest</SelectItem>
              <SelectItem value="oldest">Oldest</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input
          placeholder="type here to search"
          value={search}
          onChange={(e) => { setSearch(e.target.value); }}
          onKeyDown={handlePressEnter}
        />
        <ButtonComponent
          type="button"
          className="bg-backgroundPrimary"
          onClick={handleSearch}
        >
          Search
        </ButtonComponent>
      </div>
    </div>

  );
};

const AdminPageContent = () => {
  const { articles, setParams, params } = useArticleContext();
  const { showLoading, hideLoading } = usePopUpContext();

  const { data, isLoading, refetch } = articles;

  useEffect(() => {
    if (isLoading) {
      showLoading();
    } else {
      hideLoading();
    }
  }, [isLoading]);

  const router = useRouter();

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      render: (text: string, record: any) => (
        <div>
          <Button
            className="px-0"
            type="link"
            onClick={() => { router.push(`${EPaths.ADMIN}/${record?.id}`); }}
          >
            {text}
          </Button>
          {
          (record.isPopular || record.isInsight) && (
            <p className="text-green-500">
              {record.isPopular && 'Popular Article'}
              {(record.isPopular && record.isInsight) && ' and '}
              {record.isInsight && 'Insight Article'}
            </p>
          )
             }
        </div>
      ),
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
      render: (text: string) => <p className="line-clamp-2">{text}</p>,
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Action',
      dataIndex: '',
      key: 'action',
      render: (_: any, record: any) => (
        <DeleteArticleButton
          id={record.id}
          successCb={refetch}
        />
      ),
    },
  ];

  if (!data) {
    return <p>Loading!</p>;
  }

  return (
    <div className="bg-white rounded-md p-4 min-h-[calc(100vh-8rem)]">
      <div className="flex justify-between mb-4">
        <p className="text-3xl font-bold">Articles</p>
        <Button
          type="primary"
          htmlType="button"
          className="bg-backgroundPrimary"
          onClick={() => router.push(EPaths.CREATE)}
        >
          Create Article
        </Button>
      </div>
      <FilterSection />
      <Table
        dataSource={data.data.articles}
        columns={columns}
        pagination={false}
        className="mt-4"
      />
      <Pagination
        className="mt-4"
        align="end"
        current={params.page}
        total={data?.data?.totalItem}
        onChange={(targetPage) => setParams((prev) => ({ ...prev, page: targetPage }))}
      />
    </div>
  );
};

const AdminPage = () => (
  <ArticleProvider>
    <AdminPageContent />
  </ArticleProvider>
);

export default AdminPage;

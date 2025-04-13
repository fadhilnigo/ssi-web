'use client';

import { RowLayout } from '~/@shared/_components/Section/RecommendedSection';
import { Pagination } from 'antd';
import { useArticleContext } from './ArticleProvider';

const ArticleList = () => {
  const { articles, params, setParams } = useArticleContext();

  const { data } = articles;

  if (!data) {
    return null;
  }

  return (
    <>
      <RowLayout data={data.data.articles} />
      <Pagination
        className="mt-4"
        align="end"
        current={params.page}
        total={data?.data?.totalItem}
        onChange={(targetPage) => setParams((prev) => ({ ...prev, page: targetPage }))}
      />
    </>

  );
};

export default ArticleList;

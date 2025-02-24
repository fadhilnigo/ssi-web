'use client';

import { RowLayout } from '~/@shared/_components/Section/RecommendedSection';
import { useGetArticleList } from '../_hooks/useGetArticleList';

const ArticleList = () => {
  const { data } = useGetArticleList();

  if (!data) {
    return null;
  }

  return (
    <RowLayout data={data.data} />
  );
};

export default ArticleList;

'use client';

import Image from 'next/image';
import { useParams } from 'next/navigation';

import parse from 'html-react-parser';

import RecommendedSection from '~/@shared/_components/Section/RecommendedSection';
import { useGetArticleData } from './_hooks/useGetArticleData';

const ArticlePage = () => {
  const params = useParams<{ id: string } >();
  const { data, isFetching } = useGetArticleData(params.id);

  if (!data || isFetching) {
    return null;
  }

  return (
    <div className="content-wrapper pt-[3.5rem] pb-[5.8rem]">
      <div className="relative w-full aspect-[1286/608]">
        <Image
          src={data.data.articleContent.image}
          alt={data.data.articleContent.title}
          className="rounded-lg"
          objectFit="cover"
          fill
        />
      </div>

      <p className="text-[3.125rem] font-bold mt-[3.2rem]">{data.data.articleContent.title}</p>

      <p className="text-xs line-clamp-1 mt-[0.375rem]">
        {data.data.articleContent.author}
        {' • '}
        {data.data.articleContent.date}
      </p>

      <div className="flex gap-[3rem]">
        <div className="html-content">
          {parse(data.data.articleContent.content)}
        </div>
        <RecommendedSection
          title="Related Article"
          data={data.data.related}
          layout="ONECOLUMN"
        />
      </div>

      <RecommendedSection
        title="More About Safety"
        // eslint-disable-next-line no-console
        seeAllAction={() => console.log('cek')}
        data={data.data.moreItem}
      />
    </div>
  );
};

export default ArticlePage;

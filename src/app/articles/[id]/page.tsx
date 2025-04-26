'use client';

import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import cx from 'classnames';

import parse from 'html-react-parser';

import RecommendedSection from '~/@shared/_components/Section/RecommendedSection';
import { useGetArticleData } from './_hooks/useGetArticleData';

const ArticlePage = () => {
  const router = useRouter();
  const params = useParams<{ id: string }>();
  const { data, isFetching } = useGetArticleData(params.id);

  if (!data || isFetching) {
    return null;
  }

  return (
    <div className={cx(
      'content-wrapper pt-6 pb-8',
      'md:pt-[3.5rem] md:pb-[5.8rem]',
    )}
    >
      <div className="relative w-full aspect-[1286/608]">
        <Image
          src={data.data.articleContent.image}
          alt={data.data.articleContent.title}
          className="rounded-lg"
          objectFit="cover"
          fill
        />
      </div>

      <p className={cx(
        'text-3xl font-bold mt-6',
        'md:text-5xl md:mt-[3.2rem]',
      )}
      >
        {data.data.articleContent.title}
      </p>

      <p className="text-xs line-clamp-1 mt-[0.375rem]">
        {data.data.articleContent.author}
        {' • '}
        {data.data.articleContent.date}
      </p>

      <div className={cx(
        'flex gap-6 flex-col',
        'md:flex-row gap-[3rem]',
      )}
      >
        <div className="html-content flex-grow">
          {parse(data.data.articleContent.content)}
        </div>
        <div className="md:w-[32%]">
          <RecommendedSection
            title="Related Article"
            data={data.data.related}
            layout="ONECOLUMN"
          />
        </div>
      </div>

      <div className="hidden md:block mt-8">
        <RecommendedSection
          title="More About Safety"
          seeAllAction={() => router.push('/articles')}
          data={data.data.moreItem}
        />
      </div>

      <div className="block md:hidden mt-8">
        <RecommendedSection
          title="More About Safety"
          seeAllAction={() => router.push('/articles')}
          data={data.data.moreItem}
          layout="ONECOLUMN"
        />
      </div>

    </div>
  );
};

export default ArticlePage;

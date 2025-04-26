'use client';

import RecommendedSection from '~/@shared/_components/Section/RecommendedSection';
import cx from 'classnames';
import { useRouter } from 'next/navigation';
import { useGetHomeItem } from './_hooks/useGetHomeItems';

const HomeSection = () => {
  const { data } = useGetHomeItem();

  const router = useRouter();

  return (
    <div className={cx(
      'flex flex-col gap-8 mb-10',
      'md:mb-[6.8rem] md:gap-[8.313rem]',
    )}
    >
      <RecommendedSection
        title="Popular Articles"
        seeAllAction={() => router.push('/articles')}
        data={data?.data.popular}
        layout="HIGHLIGHT"
      />
      <RecommendedSection
        title="Latest Articles"
        seeAllAction={() => router.push('/articles')}
        data={data?.data.latest}
        layout="ROW"
      />
      <RecommendedSection
        title="Insight"
        seeAllAction={() => router.push('/articles')}
        data={data?.data.insight}
        layout="ROW"
      />
    </div>
  );
};

export default HomeSection;

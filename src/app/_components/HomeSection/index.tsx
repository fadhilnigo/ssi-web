/* eslint-disable no-console */

'use client';

import RecommendedSection from '~/@shared/_components/Section/RecommendedSection';
import { useGetHomeItem } from './_hooks/useGetHomeItems';

const HomeSection = () => {
  const { data } = useGetHomeItem();

  return (
    <div className="flex flex-col gap-[8.313rem] mb-[6.8rem]">
      <RecommendedSection
        title="Popular Articles"
        seeAllAction={() => console.log('cek')}
        data={data?.data.popular}
        layout="HIGHLIGHT"
      />
      <RecommendedSection
        title="Latest Articles"
        seeAllAction={() => console.log('cek')}
        data={data?.data.latest}
        layout="ROW"
      />
      <RecommendedSection
        title="Insight"
        seeAllAction={() => console.log('cek')}
        data={data?.data.insight}
        layout="ROW"
      />
    </div>
  );
};

export default HomeSection;

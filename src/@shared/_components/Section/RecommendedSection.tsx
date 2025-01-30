import Image from 'next/image';
import { IHomeItem } from '~/app/_components/HomeSection/_hooks/useGetHomeItems';
import { ChevronRight } from 'lucide-react';
import { Button } from '../ui';

interface IRecommendedSection {
  title: string;
  seeAllAction: VoidFunction;
  data?: IHomeItem[];
  layout?: 'HIGHLIGHT' | 'ROW';
}

const HighligtLayout = ({ data }: { data: IHomeItem[] }) => {
  const highlightedData = data[0];
  return (
    <div className="flex justify-between mt-[1.7rem]">

      <div className="flex flex-col gap-[1.5rem] w-[48%] cursor-pointer">
        <div className="relative w-full aspect-[412/401] rounded-lg">
          <Image
            src={highlightedData.image}
            alt={highlightedData.title}
            fill
            className="rounded-lg"
            objectFit="cover"
          />
        </div>

        <p className="text-xs line-clamp-1">
          {highlightedData.author}
          {' • '}
          {highlightedData.date}
        </p>

        <div className="flex flex-col gap-[0.5rem]">
          <p className="font-bold text-2xl line-clamp-2">
            {highlightedData.title}
          </p>
          <p className="text-xl line-clamp-2">
            {highlightedData.description}
          </p>
          <div>
            <Button variant="link" className="text-xl font-semibold text-[#ff2400] pl-0">
              Read More
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-[48%] justify-between">
        {
          data.slice(1).map((item) => (
            <div key={item.id} className="flex gap-[1.5rem] h-[32%] w-full cursor-pointer justify-between">
              <div className="relative w-[16.875rem] h-full rounded-lg shrink-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="rounded-lg"
                  objectFit="cover"
                />
              </div>
              <div className="grow-0">
                <p className="text-xs line-clamp-1">
                  {item.author}
                  {' • '}
                  {item.date}
                </p>

                <p className="font-bold text-3xl">
                  {item.title}
                </p>
              </div>

            </div>
          ))
        }
      </div>
    </div>
  );
};

const RowLayout = ({ data }: { data: IHomeItem[] }) => (
  <div className="flex justify-between mt-[1.7rem]">
    {
      data.map((item) => (
        <div key={item.id} className="flex flex-col gap-[1.5rem] w-[32%] cursor-pointer">
          <div className="relative w-full aspect-[412/401] rounded-lg">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="rounded-lg"
              objectFit="cover"
            />
          </div>

          <p className="text-xs line-clamp-1">
            {item.author}
            {' • '}
            {item.date}
          </p>

          <div className="flex flex-col justify-between grow gap-[1.5rem]">
            <p className="font-bold text-2xl line-clamp-2">
              {item.title}
            </p>
            <p className="text-base line-clamp-2">
              {item.description}
            </p>
          </div>

        </div>
      ))
    }
  </div>
);

const RecommendedSection = ({
  title, seeAllAction, data, layout = 'ROW',
}: IRecommendedSection) => {
  if (!data) {
    return null;
  }

  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center">
        <p className="text-[2.5rem] font-semibold">
          {title}
        </p>
        <Button
          variant="ghost"
          className="text-2xl font-semibold text-[#ff2400]"
          onClick={seeAllAction}
        >
          See All
          <ChevronRight />
        </Button>
      </div>
      {layout === 'HIGHLIGHT' && <HighligtLayout data={data} />}
      {layout === 'ROW' && <RowLayout data={data} />}
    </div>
  );
};

export default RecommendedSection;

import Image from 'next/image';
import { IHomeItem } from '~/app/_components/HomeSection/_hooks/useGetHomeItems';
import { ChevronRight } from 'lucide-react';
import cx from 'classnames';
import Link from 'next/link';
import { Button } from '../ui';

interface IRecommendedSection {
  title: string;
  seeAllAction?: VoidFunction;
  data?: IHomeItem[];
  layout?: 'HIGHLIGHT' | 'ROW' | 'ONECOLUMN';
}

const HighligtLayout = ({ data }: { data: IHomeItem[] }) => {
  const highlightedData = data[0];
  return (
    <div className={cx(
      'flex flex-col mt-4 gap-6',
      'md:mt-[1.7rem] md:justify-between md:flex-row md:gap-0',
    )}
    >

      <div className={cx(
        'flex flex-col gap-2 w-full',
        'md:w-[48%] md:gap-[1.5rem]',
      )}
      >
        <div className={cx(
          'relative w-full aspect-[7/3] rounded-lg overflow-hidden',
          'md:aspect-[412/401]',
        )}
        >
          <Image
            src={highlightedData.image}
            alt={highlightedData.title}
            fill
            className="rounded-lg hover:scale-125 transition-all"
            objectFit="cover"
          />
        </div>

        <p className="text-xs line-clamp-1">
          {highlightedData.author}
          {' • '}
          {highlightedData.date}
        </p>

        <div className="flex flex-col gap-[0.5rem]">
          <p className={cx(
            'font-bold text-xl line-clamp-2',
            'md:text-2xl',
          )}
          >
            {highlightedData.title}
          </p>
          <p className={cx(
            'text-lg line-clamp-2',
            'md:text-xl',
          )}
          >
            {highlightedData.description}
          </p>
          <div>
            <Link href={`/articles/${highlightedData.id}`}>
              <Button
                variant="link"
                className="text-xl font-semibold text-[#ff2400] pl-0"
              >
                Read More
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className={cx(
        'flex flex-col w-full gap-4',
        'md:w-[48%] md:justify-between md:gap-0',
      )}
      >
        {
          data.slice(1).map((item) => (
            <Link
              key={item.id}
              className={cx(
                'flex gap-2 w-full cursor-pointer justify-between',
                'md:h-[32%] md:gap-[1.5rem]',
              )}
              href={`/articles/${item.id}`}
            >
              <div className={cx(
                'relative w-[50%] aspect-square rounded-lg shrink-0 overflow-hidden',
                'md:w-[16.875rem]',
              )}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="rounded-lg hover:scale-125 transition-all"
                  objectFit="cover"
                />
              </div>
              <div className="grow-0">
                <p className="text-xs line-clamp-1">
                  {item.author}
                  {' • '}
                  {item.date}
                </p>

                <p className={cx(
                  'font-bold text-lg',
                  'md:text-3xl',
                )}
                >
                  {item.title}
                </p>
              </div>

            </Link>
          ))
        }
      </div>
    </div>
  );
};

const OneRowLayout = ({ data }: { data: IHomeItem[] }) => (
  <div className={cx(
    'flex flex-col gap-6 mt-4',
    'md:mt-[1.7rem] md:flex-row md:justify-between md:gap-0',
  )}
  >
    {
      data.map((item) => (
        <Link
          key={item.id}
          className={cx(
            'flex flex-col gap-2 w-full cursor-pointer',
            'md:w-[32%] md:gap-[1.5rem]',
          )}
          href={`/articles/${item.id}`}
        >
          <div className={cx(
            'relative w-full aspect-[7/3] rounded-lg overflow-hidden',
            'md:aspect-[412/401]',
          )}
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="rounded-lg hover:scale-125 transition-all"
              objectFit="cover"
            />
          </div>

          <p className="text-xs line-clamp-1">
            {item.author}
            {' • '}
            {item.date}
          </p>

          <div className={cx(
            'flex flex-col justify-between grow gap-2',
            'md:gap-[1.5rem]',
          )}
          >
            <p className={cx(
              'font-bold text-lg line-clamp-2',
              'md:text-2xl',
            )}
            >
              {item.title}
            </p>
            <p className="text-base line-clamp-2">
              {item.description}
            </p>
          </div>

        </Link>
      ))
    }
  </div>
);

const OneColumnLayout = ({ data }: { data: IHomeItem[] }) => (

  <div className={cx(
    'flex justify-between mt-2',
    'md:flex-col md:justify-normal md:gap-[2.625rem] md:mt-[1.125rem]',
  )}
  >
    {
      data.map((item) => (
        <Link
          key={item.id}
          className={cx(
            'flex flex-col gap-2 w-[32%] cursor-pointer justify-between',
            'md:w-full md:gap-[1.5rem]',
          )}
          href={`/articles/${item.id}`}
        >
          <div className="relative w-full aspect-[270/217] rounded-lg shrink-0 overflow-hidden">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="rounded-lg hover:scale-125 transition-all"
              objectFit="cover"
            />
          </div>

          <p className="text-xs line-clamp-1">
            {item.author}
            {' • '}
            {item.date}
          </p>

          <p className={cx(
            'font-bold text-lg',
            'md:text-3xl',
          )}
          >
            {item.title}
          </p>

        </Link>
      ))
    }
  </div>
);

export const RowLayout = ({ data }: { data: IHomeItem[] }) => (
  <div className={cx(
    'flex mt-4 flex-wrap gap-4',
    'md:mt-[1.7rem] md:gap-y-6 md:gap-x-2',
  )}
  >
    {
      data?.map((item) => (
        <Link
          key={item.id}
          className={cx(
            'flex flex-col gap-2 w-[30%] cursor-pointer',
            'md:gap-[1.5rem] md:w-[24%]',
          )}
          href={`/articles/${item.id}`}
        >
          <div className="relative w-full aspect-[412/401] rounded-lg overflow-hidden">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="rounded-lg hover:scale-125 transition-all"
              objectFit="cover"
            />
          </div>

          <p className="text-xs line-clamp-1">
            {item.author}
            {' • '}
            {item.date}
          </p>

          <div className={cx(
            'flex flex-col justify-between grow gap-2',
            'md:gap-[1.5rem]',
          )}
          >
            <p className={cx(
              'font-bold text-xl line-clamp-2',
              'md:text-2xl',
            )}
            >
              {item.title}
            </p>
            <p className="text-base line-clamp-2">
              {item.description}
            </p>
          </div>

        </Link>
      ))
    }
  </div>
);

const RecommendedSection = ({
  title, data, layout = 'ROW', seeAllAction,
}: IRecommendedSection) => {
  if (!data) {
    return null;
  }

  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center">
        <p className={cx(
          'text-3xl font-semibold',
          { 'md:text-[1.875rem]': layout === 'ONECOLUMN' },
          'md:text-[2.5rem]',
        )}
        >
          {title}
        </p>
        {
          (layout !== 'ONECOLUMN' || !!seeAllAction) && (
            <Button
              variant="ghost"
              className={cx(
                'text-lg font-semibold text-[#ff2400]',
                'md:text-2xl',
              )}
              onClick={seeAllAction}
            >
              See All
              <ChevronRight />
            </Button>
          )
        }
      </div>
      {layout === 'HIGHLIGHT' && <HighligtLayout data={data} />}
      {layout === 'ROW' && <OneRowLayout data={data} />}
      {layout === 'ONECOLUMN' && <OneColumnLayout data={data} />}
    </div>
  );
};

export default RecommendedSection;

'use client';

import { useEffect, useState } from 'react';
import cx from 'classnames';
import Autoplay from 'embla-carousel-autoplay';

import { Carousel, CarouselApi } from '~/@shared/_components';

import { CarouselNextButton, CarouselPrevButton } from './_components/Button';
import CarouselContentItem from './_components/Content';
import { useGetCarouselItem } from './_hooks/useGetCarouselItem';

const HomeCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const { data } = useGetCarouselItem();

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
      className={cx(
        'w-[98%]  flex justify-center gap-4 relative',
        'md:w-[90%]',
      )}
      setApi={setApi}
    >
      <CarouselPrevButton />
      <CarouselContentItem />
      <CarouselNextButton />
      <div className="flex absolute bottom-[1.2rem] gap-[2.5rem] items-center">
        {
          data?.data.map((item, index) => (
            <div
              key={item.id}
              className={cx(
                'rounded-full w-[0.2rem] md:w-[0.7rem] transition-all',
                { 'bg-backgroundPrimary w-[0.5rem] h-[0.5rem] md:w-[1.2rem] md:h-[1.2rem]': current === index + 1 },
                { 'bg-white w-[0.2rem] h-[0.2rem]  md:w-[0.7rem] md:h-[0.7rem]': current !== index + 1 },
              )}
            />
          ))
        }
      </div>
    </Carousel>

  );
};

export default HomeCarousel;

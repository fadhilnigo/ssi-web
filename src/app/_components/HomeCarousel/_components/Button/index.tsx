'use client';

import Image from 'next/image';
import cx from 'classnames';
import ArrowLeft from '~/@shared/_assets/svg/arrow_left.svg';
import ArrowRight from '~/@shared/_assets/svg/arrow_right.svg';
import { useCarousel } from '~/@shared/_components';

export const CarouselPrevButton = () => {
  const { scrollPrev, canScrollPrev } = useCarousel();

  return (
    <Image
      src={ArrowLeft}
      alt="arrow left"
      onClick={scrollPrev}
      className={cx(
        'transition-all hidden',
        'md:block',
        { 'opacity-1': canScrollPrev },
        { 'opacity-0': !canScrollPrev },
      )}
    />
  );
};

export const CarouselNextButton = () => {
  const { scrollNext, canScrollNext } = useCarousel();
  return (
    <Image
      src={ArrowRight}
      alt="arrow left"
      onClick={scrollNext}
      className={cx(
        'transition-all hidden',
        'md:block',
        { 'opacity-1': canScrollNext },
        { 'opacity-0': !canScrollNext },
      )}
    />
  );
};

'use client';

import Image from 'next/image';
import {
  Card, CardContent, CarouselContent, CarouselItem,
} from '~/@shared/_components';
import { useGetCarouselItem } from '../../_hooks/useGetCarouselItem';

const CarouselContentItem = () => {
  const { data, isFetching } = useGetCarouselItem();

  if (!data?.data || isFetching) {
    return null;
  }

  return (
    <CarouselContent>
      {data.data.map((item) => (
        <CarouselItem key={item.id}>
          <div className="p-1">
            <Card>
              <CardContent className="flex aspect-[1289/683] items-center justify-center p-6 relative">
                <Image
                  alt={`${item.id} carousel`}
                  src={item.image}
                  className="rounded-lg"
                  objectFit="cover"
                  fill
                />
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      ))}
    </CarouselContent>
  );
};

export default CarouselContentItem;

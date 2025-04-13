/* eslint-disable no-tabs */
import {
  http, HttpResponse, RequestHandler,
} from 'msw';
import { API_ENDPOINT } from '~/@api/endpoint';

import CarouselItem from '~/@shared/_assets/png/mock/carousel.png';

const getCarouselItems = http.get(API_ENDPOINT.GET_CAROUSEL_ITEM, () => HttpResponse.json({
  data: [
    { id: 'carousel 1', image: CarouselItem.src },
    { id: 'carousel 2', image: 'https://placehold.co/600x400' },
    { id: 'carousel 3', image: CarouselItem.src },
  ],
}));

export const handlers: RequestHandler[] = [getCarouselItems];

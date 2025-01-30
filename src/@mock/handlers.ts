import {
  http, HttpResponse, RequestHandler,
} from 'msw';
import { API_ENDPOINT } from '~/@api/endpoint';

import CarouselItem from '~/@shared/_assets/png/mock/carousel.png';

import PopularImage1 from '~/@shared/_assets/png/mock/homeItem/popular_image_1.png';
import PopularImage2 from '~/@shared/_assets/png/mock/homeItem/popular_image_2.png';
import PopularImage3 from '~/@shared/_assets/png/mock/homeItem/popular_image_3.png';
import PopularImage4 from '~/@shared/_assets/png/mock/homeItem/popular_image_4.png';
import LatestImage1 from '~/@shared/_assets/png/mock/homeItem/latest_image_1.png';
import LatestImage2 from '~/@shared/_assets/png/mock/homeItem/latest_image_2.png';
import LatestImage3 from '~/@shared/_assets/png/mock/homeItem/latest_image_3.png';
import InisghtImage1 from '~/@shared/_assets/png/mock/homeItem/insight_image_1.png';
import InisghtImage2 from '~/@shared/_assets/png/mock/homeItem/insight_image_2.png';
import InisghtImage3 from '~/@shared/_assets/png/mock/homeItem/insight_image_3.png';

const getCarouselItems = http.get(API_ENDPOINT.GET_CAROUSEL_ITEM, () => HttpResponse.json({
  data: [
    { id: 'carousel 1', image: CarouselItem.src },
    { id: 'carousel 2', image: 'https://placehold.co/600x400' },
    { id: 'carousel 3', image: CarouselItem.src },
  ],
}));

const getHomeItems = http.get(API_ENDPOINT.GET_HOME_ITEM, () => HttpResponse.json({
  data: {
    popular: [
      {
        id: '1',
        image: PopularImage1.src,
        author: 'Fadhil Khalid',
        date: 'September 17, 2024',
        title: 'Introduction to machinery safety',
        description: 'How to control the risks of injuries caused by equipment and machinery.',
      },
      {
        id: '2',
        image: PopularImage2.src,
        author: 'Rosa Pani',
        date: 'September 16, 2024',
        title: 'Have the right workplace facilities',
      },
      {
        id: '3',
        image: PopularImage3.src,
        author: 'Fadhil Khalid',
        date: 'September 15, 2024',
        title: 'Provision and Use of Work Equipment Regulations',
      },
      {
        id: '4',
        image: PopularImage4.src,
        author: 'Rosa Pani',
        date: 'September 17, 2024',
        title: 'Report accidents and illness',
      },
    ],
    latest: [
      {
        id: '1',
        image: LatestImage1.src,
        author: 'Rosa Pani',
        date: 'October 14, 2024',
        title: 'Farm Owner Fined After Death of Roofer',
        description: 'The farmer was fined £16,000 after incorrect equipment was used to access...',
      },
      {
        id: '2',
        image: LatestImage2.src,
        author: 'Fadhil Khalid',
        date: 'October 10, 2024',
        title: 'Company Fined Following Crane Collapse',
        description: 'The £750,000 fine was issued after a crane collapsed at a dock, putting workers lives at risk...',
      },
      {
        id: '3',
        image: LatestImage3.src,
        author: 'Fadhil Khalid',
        date: 'October 9, 2024',
        title: 'Crown Censure Issued Following Death of Soldier',
        description: 'A 51-year-old man suffered fatal injuries while taking part in Jackal driver training with five other...',
      },
    ],
    insight: [
      {
        id: '1',
        image: InisghtImage1.src,
        author: 'Fadhil Khalid',
        date: 'October 9, 2024',
        title: 'Using Work Equipment Safely',
        description: 'Every year, there are a number of accidents from using work equipment, including machinery, Every year, there are a number of accidents from using work equipment, including machinery',
      },
      {
        id: '2',
        image: InisghtImage2.src,
        author: 'Rosa Pani',
        date: 'September 25, 2024',
        title: 'Introduction to Working at Height',
        description: 'Measures employers can take to reduce the risk of their workers falling while working at height, Measures employers can take to reduce the risk of their workers falling while working at height',
      },
      {
        id: '3',
        image: InisghtImage3.src,
        author: 'Rosa Pani',
        date: 'September 24, 2024',
        title: 'Safe Use of Ladders and Stepladders',
        description: 'How, when and where to use ladders and stepladders safely, How, when and where to use ladders and stepladders safely',
      },
    ],
  },
}));

export const handlers: RequestHandler[] = [getCarouselItems, getHomeItems];

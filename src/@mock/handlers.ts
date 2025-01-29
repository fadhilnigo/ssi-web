import { http, HttpResponse, RequestHandler } from 'msw';
import { API_ENDPOINT } from '~/@api/endpoint';

const getMock = http.get(API_ENDPOINT.GET_ARTICLE_LIST, () => HttpResponse.json({
  data: {
    posts: [
      { id: '1', title: 'First Post' },
      { id: '2', title: 'Second Post' },
      { id: '3', title: 'Third Post' },
    ],
  },
}));

export const handlers: RequestHandler[] = [getMock];

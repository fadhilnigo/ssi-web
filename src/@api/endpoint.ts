const API_DOMAIN: string = 'https://api.safety.com/api';

const createApiEndpoint = (path: string) => `${API_DOMAIN}${path}`;

export const API_ENDPOINT = {
  GET_CAROUSEL_ITEM: createApiEndpoint('/v1/carousels'),
  GET_HOME_ITEM: createApiEndpoint('/v1/home-items'),
  GET_ARTICLE_DATA: createApiEndpoint('/v1/articles/:id'),
  GET_ARTICLE_LIST: createApiEndpoint('v1/articles'),
};

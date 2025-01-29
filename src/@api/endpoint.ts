const API_DOMAIN: string = 'https://api.safety.com/api';

const createApiEndpoint = (path: string) => `${API_DOMAIN}${path}`;

export const API_ENDPOINT = {
  GET_ARTICLE_LIST: createApiEndpoint('/v1/mock'),
};

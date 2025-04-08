const API_DOMAIN: string = 'https://safetyscience.id/api';

const createApiEndpoint = (path: string) => `${API_DOMAIN}${path}`;

export const API_ENDPOINT = {
  POST_LOGIN: createApiEndpoint('/v1/user/login'),
  POST_UPLOAD_IMAGE: createApiEndpoint('/v1/images'),
  GET_ARTICLE_LIST: createApiEndpoint('/v1/articles'),
  CREATE_ARTICLE: createApiEndpoint('/v1/articles/create'),
};

export const TOKEN_KEY = '_ua_t';
export const REDIRECT_KEY = '_rp';

export const ADMIN_PAGE_ROUTE = 'eyJhbGciOiJIU';

export enum EPaths {
  LOGIN = '/login',
}

export const COMMON_API_QUERY_OPTIONS = {
  refetchOnWindowFocus: false,
  retry: false,
};

export enum EQueryKey {
  GET_ARTICLE_LIST_DATA = 'get_article_list_data',
  GET_HOME_ITEM = 'get_home_item',
  GET_ARTICLE_DATA = 'get_article_data',
  GET_ARTICLE_LIST = 'get_article_list',
}

// add mutation key if needed
// use need_loading mutation key to trigger universal loading
export enum EMutationKey {
  NEED_LOADING = 'need_loading',
}

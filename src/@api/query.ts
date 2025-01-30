export const COMMON_API_QUERY_OPTIONS = {
  refetchOnWindowFocus: false,
  retry: false,
};

export enum EQueryKey {
  GET_ARTICLE_LIST_DATA = 'get_article_list_data',
  GET_HOME_ITEM = 'get_home_item',
}

// add mutation key if needed
// use need_loading mutation key to trigger universal loading
export enum EMutationKey {
  NEED_LOADING = 'need_loading',
}

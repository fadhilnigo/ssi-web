'use client';

import { useMutation } from '@tanstack/react-query';
import {
  ApiFunc, IApiBaseRes, postJson,
} from '../_interface';
import { API_ENDPOINT, EMutationKey } from '../_constants';

type Payload = {
  image?: string;
  title: string;
  content: string;
  description: string;
};

type Response = {
  id: number;
  image: string;
  title: string;
  content: string;
  description: string;
};

export const postArticle: ApiFunc<Payload, IApiBaseRes<Response>> = (payload) => postJson({
  url: API_ENDPOINT.CREATE_ARTICLE,
  data: payload,
});

export const usePostArticle = () => useMutation({
  mutationKey: [EMutationKey.NEED_LOADING],
  mutationFn: postArticle,
});

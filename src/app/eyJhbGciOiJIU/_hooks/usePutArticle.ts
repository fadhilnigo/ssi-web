'use client';

import { useMutation } from '@tanstack/react-query';
import {
  ApiFunc,
  IApiBaseRes,
  putJson,
} from '../_interface';
import { API_ENDPOINT, EMutationKey } from '../_constants';

type Payload = {
  id: string;
  title: string;
  content: string;
  description: string;
  isPopular: boolean;
  isInsight: boolean;
  image?: string;
};

type Response = {
  id: number;
  image: string;
  title: string;
  content: string;
  description: string;
};

export const putArticle: ApiFunc<Payload, IApiBaseRes<Response>> = (payload) => putJson({
  url: API_ENDPOINT.UPDATE_ARTICLE.replace(':id', payload.id),
  data: payload,
});

export const usePutArticle = () => useMutation({
  mutationKey: [EMutationKey.NEED_LOADING],
  mutationFn: putArticle,
});

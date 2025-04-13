'use client';

import { useMutation } from '@tanstack/react-query';
import {
  ApiFunc,
  deleteJson,
  IApiBaseRes,
} from '../_interface';
import { API_ENDPOINT, EMutationKey } from '../_constants';

type Payload = {
  id: string;
};

type Response = {
  id: number;

};

export const deleteArticle: ApiFunc<Payload, IApiBaseRes<Response>> = (payload) => deleteJson({
  url: API_ENDPOINT.UPDATE_ARTICLE.replace(':id', payload.id),
  data: payload,
});

export const useDeleteArticle = () => useMutation({
  mutationKey: [EMutationKey.NEED_LOADING],
  mutationFn: deleteArticle,
});

'use client';

import { useMutation } from '@tanstack/react-query';
import {
  ApiFunc, IApiBaseRes, postJson,
} from '../_interface';
import { API_ENDPOINT } from '../_constants';

type Payload = {
  email: string;
  password: string
};

type Response = {
  idToken: string;
  email: string;
  role: string;
};

export const postLogin: ApiFunc<Payload, IApiBaseRes<Response>> = (payload) => postJson({
  url: API_ENDPOINT.POST_LOGIN,
  data: payload,
});

export const usePostLogin = () => useMutation({
  mutationFn: postLogin,
});

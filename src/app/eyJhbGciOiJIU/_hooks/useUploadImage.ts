'use client';

import { useMutation } from '@tanstack/react-query';
import {
  ApiFunc, IApiBaseRes, postJson,
} from '../_interface';
import { API_ENDPOINT } from '../_constants';

type Payload = {
  image: string | Blob
};

type Response = {
  imageLink: string;
};

export const postUploadImage: ApiFunc<Payload, IApiBaseRes<Response>> = (payload) => {
  const formData = new FormData();
  formData.append('image', payload.image);
  return postJson({
    url: API_ENDPOINT.POST_UPLOAD_IMAGE,
    data: formData,
    options: {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    },
  });
};

export const usePostUploadImage = () => useMutation({
  mutationFn: postUploadImage,
});

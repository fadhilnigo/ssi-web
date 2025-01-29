import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export type ApiFunc<T, R> = (params: T) => Promise<R>;

export interface IApiBaseRes<D = {}> {
  data: D
}

interface IApiParams<P extends Object, D extends Object> {
  url: string;
  params?: P;
  data?: D;
  options?: AxiosRequestConfig;
}

const validateStatus = (statusCode: number): boolean => {
  if (statusCode >= 200 && statusCode < 300) {
    if (statusCode === 204) return false;
    return true;
  }
  return false;
};

const jsonReqHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

const getDefaultHeaders = () => {
  const headers: { [key: string]: string } = {};

  return headers;
};

// JSON API Util
export const getJsonWithQuery = async <
  IParams extends object,
  IResponse extends object,
>({
  url,
  params,
  options = {},
}: IApiParams<IParams, {}>) => {
  const requestConfig: AxiosRequestConfig = {
    ...options,
    headers: {
      ...getDefaultHeaders(),
      ...options.headers,
      ...jsonReqHeaders,
    },
    params,
    validateStatus,
  };
  const response: IResponse = await axios
    .get(url, requestConfig)
    .then((res) => res.data);
  return response;
};

export const postJson = async <IData extends object, IResponse extends object>({
  url,
  data,
  options = {},
}: IApiParams<{}, IData>) => {
  const requestConfig: AxiosRequestConfig = {
    ...options,
    headers: {
      ...getDefaultHeaders(),
      ...options.headers,
      ...jsonReqHeaders,
    },
    validateStatus,
  };
  const response: IResponse = await axios
    .post(url, data, requestConfig)
    .then((res) => res.data);
  return response;
};

export const putJson = async <IData extends object, IResponse extends object>({
  url,
  data,
  options = {},
}: IApiParams<{}, IData>) => {
  const requestConfig: AxiosRequestConfig = {
    ...options,
    headers: {
      ...getDefaultHeaders(),
      ...options.headers,
      ...jsonReqHeaders,
    },
    validateStatus,
  };
  const response: IResponse = await axios
    .put(url, data, requestConfig)
    .then((res) => res.data);
  return response;
};

export const deleteJson = async <
  IParams extends object,
  IResponse extends object,
>({
  url,
  params,
  options = {},
}: IApiParams<IParams, {}>) => {
  const requestConfig: AxiosRequestConfig = {
    ...options,
    headers: {
      ...getDefaultHeaders(),
      ...options.headers,
      ...jsonReqHeaders,
    },
    params,
    validateStatus,
  };
  const response: IResponse = await axios
    .delete(url, requestConfig)
    .then((res) => res.data);
  return response;
};

export const patchJson = async <
  IData extends object,
  IResponse extends object,
>({
  url,
  data,
  options = {},
}: IApiParams<{}, IData>) => {
  const requestConfig: AxiosRequestConfig = {
    ...options,
    headers: {
      ...getDefaultHeaders(),
      ...options.headers,
      ...jsonReqHeaders,
    },
    data,
    validateStatus,
  };
  const response: IResponse = await axios
    .patch(url, requestConfig)
    .then((res) => res.data);
  return response;
};

// Data API Util
export const getBlobResponseWithQuery = async <IParams extends object>({
  url,
  params,
  options = {},
}: IApiParams<IParams, {}>) => {
  const requestConfig: AxiosRequestConfig = {
    ...options,
    headers: {
      ...getDefaultHeaders(),
      ...options.headers,
    },
    responseType: 'blob',
    params,
    validateStatus,
  };
  const response: AxiosResponse<Blob> = await axios
    .get(url, requestConfig);
  return response;
};

export const postFormData = async <
  IData extends object,
  IResponse extends object,
>({
  url,
  data,
  options = {},
}: IApiParams<{}, IData>) => {
  const requestConfig: AxiosRequestConfig = {
    ...options,
    headers: {
      ...getDefaultHeaders(),
      ...options.headers,
    },
    validateStatus,
  };
  const response: IResponse = await axios
    .post(url, data, requestConfig)
    .then((res) => res.data);

  return response;
};

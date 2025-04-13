/* eslint-disable react-hooks/exhaustive-deps */

'use client';

import {
  createContext,
  Dispatch,
  memo,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from 'react';
import { UseQueryResult } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { IApiBaseRes } from '~/@api/requestScheme';
import { IArticleParam, TArticleResponse, useGetArticleList } from '../_hooks/useGetArticleList';

interface IArticleContext {
  params: IArticleParam;
  setParams: Dispatch<SetStateAction<IArticleParam>>;
  articles: UseQueryResult<IApiBaseRes<TArticleResponse>, AxiosError<{ error: string; }, any>>
}

const ArticleContext = createContext({} as IArticleContext);

export const useArticleContext = () => useContext(ArticleContext);

const ArticleProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [params, setParams] = useState<IArticleParam>({
    page: 1,
    sort: 'desc',
    search: '',
    sortBy: '',
  });

  const result = useGetArticleList(params);

  const contextValue = useMemo(
    () => ({
      params,
      setParams,
      articles: result,
    }),
    [result, params],
  );

  return (
    <ArticleContext.Provider value={contextValue}>{children}</ArticleContext.Provider>
  );
};

export default memo(ArticleProvider);

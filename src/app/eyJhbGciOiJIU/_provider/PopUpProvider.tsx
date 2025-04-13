/* eslint-disable react-hooks/exhaustive-deps */

'use client';

import {
  createContext,
  memo,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import { notification } from 'antd';
import { NotificationInstance } from 'antd/es/notification/interface';
import LoadingSpinner from '../_components/LoadingSpinner';
import { useDisableScroll } from '../_hooks/useDisableScroll';
import LoadingMutation from '../_components/LoadingMutation';

interface IPopUpContext {
  showNotification: NotificationInstance;
  showLoading: VoidFunction;
  hideLoading: VoidFunction;
}

const PopUpContext = createContext({} as IPopUpContext);

export const usePopUpContext = () => useContext(PopUpContext);

const ArticleProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [api, contextHolder] = notification.useNotification();
  const [isLoading, setIsLoading] = useState(false);

  const showLoading = useCallback(() => {
    setIsLoading(true);
  }, []);

  const hideLoading = useCallback(() => {
    setIsLoading(false);
  }, []);

  useDisableScroll(isLoading);

  const contextValue = useMemo(
    () => ({
      showNotification: api,
      showLoading,
      hideLoading,
    }),
    [],
  );

  return (
    <PopUpContext.Provider value={contextValue}>
      {contextHolder}
      {isLoading && <LoadingSpinner />}
      <LoadingMutation />
      {children}
    </PopUpContext.Provider>
  );
};

export default memo(ArticleProvider);

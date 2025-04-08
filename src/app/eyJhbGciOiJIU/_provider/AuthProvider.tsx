/* eslint-disable react-hooks/exhaustive-deps */

'use client';

import {
  createContext,
  memo,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { jwtDecode } from 'jwt-decode';
import dayjs from 'dayjs';
import { usePathname, useRouter } from 'next/navigation';
import {
  ADMIN_PAGE_ROUTE, EPaths, TOKEN_KEY,
} from '../_constants';
import { IUserJWTInfo } from '../_interface';

interface IAuthContext {
  userInfo: IUserJWTInfo | null;
  handleLogout: () => void;
  rawAccessToken: string;
  setRawAccessToken: (value:string) => void;
}

const AuthContext = createContext({} as IAuthContext);

export const useAuthContext = () => useContext(AuthContext);

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [userInfo, setUserInfo] = useState<IUserJWTInfo | null>(null);
  const [rawAccessToken, _setTokenState] = useState(sessionStorage.getItem(TOKEN_KEY) || '');

  const pathname = usePathname();
  const router = useRouter();
  const isLoginPage = pathname.endsWith('/login');

  const setRawAccessToken = useCallback((value: string) => {
    _setTokenState(value);
    sessionStorage.setItem(TOKEN_KEY, value);
  }, []);

  const handleLogout = () => {
    setUserInfo(null);
    setRawAccessToken('');
    router.push(`/${ADMIN_PAGE_ROUTE}${EPaths.LOGIN}`);
  };

  // Observer when rawAccessToken state change OR Page Mount
  useEffect(() => {
    // store target page to access after google authentication

    // Redirect to Google OAuth no access token. (Ignore redirect for LOGIN Page as it is used to handle token extraction)
    if (!rawAccessToken && !isLoginPage) {
      router.push(`/${ADMIN_PAGE_ROUTE}${EPaths.LOGIN}`);
      return;
    }

    if (rawAccessToken) {
      try {
        const parsedUserData = jwtDecode(rawAccessToken) as IUserJWTInfo;
        setUserInfo(parsedUserData);

        // 1. Validate Token Expiry if expired logout user
        const isTokenExpired = dayjs().isAfter(dayjs.unix(parsedUserData.exp));
        if (isTokenExpired) {
          handleLogout();
        }

        // 3. Redirect to storedRedirect if all validation has passed;
        // router.push(`/${ADMIN_PAGE_ROUTE}`);
      } catch {
        // eslint-disable-next-line no-console
        console.log('err');
      }
    }
  }, [rawAccessToken]);

  // Revalidate token on each page navigation
  useEffect(() => {
    setRawAccessToken(sessionStorage.getItem(TOKEN_KEY) || '');
  }, [pathname]);

  const contextValue = useMemo(
    () => ({
      userInfo,
      handleLogout,
      rawAccessToken,
      setRawAccessToken,
    }),
    [userInfo],
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default memo(AuthProvider);

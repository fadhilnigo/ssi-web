import { useEffect } from 'react';

export const useDisableScroll = (disable: boolean) => {
  useEffect(() => {
    if (disable) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'scroll';
    }
    return () => {
      document.body.style.overflow = 'scroll';
    };
  }, [disable]);
};

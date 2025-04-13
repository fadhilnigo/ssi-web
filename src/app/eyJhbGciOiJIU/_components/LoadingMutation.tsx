'use client';

import { useIsMutating } from '@tanstack/react-query';
import { createPortal } from 'react-dom';
import { EMutationKey } from '~/@api/query';
import LoadingSpinner from './LoadingSpinner';
import { useDisableScroll } from '../_hooks/useDisableScroll';

// to give loading to for mutation query with key need_loading
const LoadingMutation = () => {
  const isMutating = useIsMutating({ mutationKey: [EMutationKey.NEED_LOADING] });

  useDisableScroll(!!isMutating);

  return (
    isMutating ? (
      createPortal(
        <LoadingSpinner />,
        document.body,
      )
    ) : null
  );
};

export default LoadingMutation;

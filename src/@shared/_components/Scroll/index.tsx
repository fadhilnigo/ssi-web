'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

const Scroll = () => {
  // when clicking a link, user will not scroll to the top of the page if the header is sticky.
  // their current scroll position will persist to the next page.
  // this useEffect is a workaround to 'fix' that behavior.

  const pathname = usePathname();

  useEffect(() => {
    window.scroll({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
};

export default Scroll;

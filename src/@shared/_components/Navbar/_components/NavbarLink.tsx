'use client';

import Link from 'next/link';
import cx from 'classnames';

const NavbarLink = () => (
  <div className={cx(
    'flex flex-row gap-4 items-center',
    'md:gap-[2.375rem]',
  )}
  >
    <Link
      href="/articles"
      className="text-sm text-textPrimaryWhite font-semibold"
    >
      Articles
    </Link>
    {/* <Link
      href="/about-us"
      className="text-sm text-textPrimaryWhite font-semibold"
    >
      About Us
    </Link>
    <Link
      href="/contact"
      className="text-sm text-textPrimaryWhite font-semibold"
    >
      Contact
    </Link> */}
  </div>
);

export default NavbarLink;

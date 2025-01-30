'use client';

import Link from 'next/link';
import cx from 'classnames';

const NavbarLink = () => (
  <div className={cx(
    'flex flex-col gap-4',
    'md:flex-row md:gap-[2.375rem] md:items-center',
  )}
  >
    <Link
      href="/articles"
      className="text-sm text-textPrimaryWhite font-semibold"
    >
      Articles
    </Link>
    <Link
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
    </Link>
  </div>
);

export default NavbarLink;

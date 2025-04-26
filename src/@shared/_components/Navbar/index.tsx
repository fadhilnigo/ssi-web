import Image from 'next/image';
import Link from 'next/link';
// import cx from 'classnames';

import SSIIcon from '~/@shared/_assets/png/ssi_icon.png';
import NavbarLink from './_components/NavbarLink';

const Navbar = () => (
  <nav className="bg-backgroundPrimary">
    <div className="py-4 content-wrapper flex justify-between items-center gap-4 md:gap-0">
      <div className="flex gap-[5.625rem] w-full justify-between md:justify-normal">
        <Link
          href="/"
        >
          <div className="relative w-[7.75rem] md:w-[7rem] aspect-[218/92]">
            <Image
              src={SSIIcon}
              alt="SSI icon"
              fill
            />
          </div>
        </Link>
        <NavbarLink />
      </div>
    </div>
  </nav>
);

export default Navbar;

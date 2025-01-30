import Image from 'next/image';
import Link from 'next/link';

import SSIIconFooter from '~/@shared/_assets/png/ssi_icon.png';

const Footer = () => (
  <footer className="bg-backgroundPrimary">
    <div className="py-4 content-wrapper flex justify-between items-center gap-4 md:gap-0">
      <div className="flex gap-[5.625rem]">
        <Link
          href="/"
        >
          <div className="relative w-[7.75rem] md:w-[7rem] aspect-[218/92]">
            <Image
              src={SSIIconFooter}
              alt="SSI icon"
              fill
            />
          </div>
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;

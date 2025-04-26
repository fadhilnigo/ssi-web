import cx from 'classnames';

import { Footer, Navbar } from '~/@shared/_components';
import HomeCarousel from './_components/HomeCarousel';
import HomeSection from './_components/HomeSection';

const Home = () => (
  <>
    <Navbar />
    <main className="min-h-[calc(100vh-9.8rem)]">
      <div className={cx(
        'items-center justify-items-center gap-16 pt-4 pb-8',
        'md:pt-[3.5rem] md:pb-[6.75rem]',
      )}

      >
        <HomeCarousel />
      </div>
      <div className="content-wrapper">
        <HomeSection />
      </div>
    </main>
    <Footer />
  </>
);

export default Home;

import HomeCarousel from './_components/HomeCarousel';
import HomeSection from './_components/HomeSection';

const Home = () => (
  <>
    <div className="items-center justify-items-center gap-16 pt-[3.5rem] pb-[6.75rem]">
      <HomeCarousel />
    </div>
    <div className="content-wrapper">
      <HomeSection />
    </div>
  </>
);

export default Home;

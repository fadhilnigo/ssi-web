const LoadingSpinner = () => (
  <div className="h-screen bg-[#00000066] z-[100] fixed top-0 justify-center items-center w-full flex p-20">
    <div className="rounded-full animate-spin border-x-backgroundPrimary border-y-[transparent] border-8 h-[12%] aspect-square" />
  </div>
);

export default LoadingSpinner;

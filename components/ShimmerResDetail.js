const ShimmerResDetail = () => {
  return (
    <>
      <div className="flex justify-between bg-gray-300 px-3 shadow-lg rounded-md items-center h-[12rem] w-[40rem] m-auto animate-pulse">
        <div className="h-40">
          <div className="h-[2rem] w-[10rem] bg-gray-400 animate-pulse rounded-md mb-5"></div>
          <div className="h-[1rem] w-[16rem] bg-gray-400 animate-pulse rounded-md mb-1"></div>
          <div className="h-[1.5rem] w-[11rem] bg-gray-400 animate-pulse rounded-md mb-1"></div>
          <div className="h-[1rem] w-[18rem] bg-gray-400 animate-pulse rounded-md mb-1"></div>
          <div className="h-[1.5rem] w-[10rem] bg-gray-400 animate-pulse rounded-md mb-1"></div>
        </div>
        <div>
          <div className="h-40 rounded-md w-40 bg-gray-400 animate-pulse object-cover "></div>
        </div>
      </div>
    </>
  );
};
export default ShimmerResDetail;

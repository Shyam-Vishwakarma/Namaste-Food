const ResCardShimmer = () => {
  return (
    <>
      <div className="w-60 bg-white shadow-xl rounded-md m-2 h-[25rem] p-2 items-center hover:scale-[1.01]">
        <div className="h-[15rem] w-[14rem] animate-pulse bg-gray-300 shadow-md content-cover"></div>
        <div className="h-8 w-[8rem] bg-gray-400 animate-pulse mt-2 rounded-sm"></div>
        <div className="h-4 w-[12rem] bg-gray-200 animate-pulse mt-2 rounded-sm"></div>
        <div className="h-3 w-[6rem] bg-gray-300 animate-pulse mt-2 rounded-sm"></div>
        <div className="h-4 w-[10rem] bg-gray-200 animate-pulse mt-2 rounded-sm"></div>
        <div className="h-4 w-[8rem] bg-gray-400 animate-pulse mt-2 rounded-sm"></div>
      </div>
    </>
  );
};
export default ResCardShimmer;

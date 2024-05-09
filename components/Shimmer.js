import ResCardShimmer from "./ResCardShimmer";
const Shimmer = () => {
  const cards = [];
  for (let i = 0; i < 20; i++) cards.push(<ResCardShimmer key={i} />);
  return (
    <>
      <div className="ml-[3.5rem] mt-2 mb-3 flex align-middle">
        <button className="bg-orange-500 text-white text-sm text-center leading-6 font-medium py-2 px-3 rounded-md">
          Top rated restaurant
        </button>
        <input className="mr-5 ml-5 w-[25rem] align-middle py-2 h-10 px-3 border-2 border-slate-900 rounded-lg"></input>
        <button className="bg-orange-500 text-white text-sm text-center leading-6 font-medium py-2 px-3 rounded-md mr-5">
          SEARCH
        </button>
        <button className="bg-white text-sm text-orange-500 hover:shadow-md hover:scale-[1.01] text-center shadow-sm leading-6 font-medium py-2 px-3 rounded-md">
          Clear Filter
        </button>
      </div>
      <div className="flex flex-wrap justify-center">
        {cards.map((card) => card)}
      </div>
    </>
  );
};
export default Shimmer;

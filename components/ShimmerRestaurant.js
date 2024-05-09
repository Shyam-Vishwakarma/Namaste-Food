import ShimmerResDetail from "./ShimmerResDetail";

const ShimmerRestaurant = () => {
  return (
    <>
      <ShimmerResDetail key="a" />
      <div className="mt-10"></div>
      <ShimmerResDetail key="b" />
      <br></br>
      <ShimmerResDetail key="c" />
      <br></br>
      <ShimmerResDetail key="d" />
    </>
  );
};
export default ShimmerRestaurant;

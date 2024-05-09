import { useEffect } from "react";

const User = (props) => {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Counter functional");
    }, 1000);
    console.log("use effect");
    return () => {
      clearInterval(timer);
      console.log("Unmount");
    };
  }, []);
  console.log("render");

  return (
    <>
      <div className="user--card">
        <h2>Name: {props.name}</h2>
        <h3>Location: Nether</h3>
        <h4>Contact: @abc</h4>
      </div>
    </>
  );
};
export default User;

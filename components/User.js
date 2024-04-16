const User = (props) => {
  return (
    <>
      <div className="user--card">
        <h2>Name: {props.name}</h2>
        <h3>Location: Nether</h3>
        <h4>Contact: @GoldIsLove</h4>
      </div>
    </>
  );
};
export default User;

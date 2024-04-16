import User from "./User";
import UserClass from "./UserClass";
const About = () => {
  return (
    <>
      <div>
        <h1>About us</h1>
        {User({ name: "Ghast" })}
        <User name="Piglin" />
        <UserClass name="Piglin Class" location="Nether" />
      </div>
    </>
  );
};
export default About;

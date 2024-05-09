import User from "./User";
import { Component } from "react";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent constructor");
  }
  componentDidMount() {
    console.log("Parent did Mount");
  }
  render() {
    console.log("Parent render");
    return (
      <>
        <div>
          <h1 style={{ margin: "2rem 2rem" }}>About us</h1>
          <UserContext.Consumer>
            {({ loggedInUser }) => <p>{loggedInUser}</p>}
          </UserContext.Consumer>
          <User />
          {/* <UserClass name="Piglin Class" location="Nether" /> */}
        </div>
      </>
    );
  }
}
export default About;

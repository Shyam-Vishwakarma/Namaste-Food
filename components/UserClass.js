import React, { useReducer } from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // count: 0,
      // count2: 1,
      userInfo: {
        name: "Dummy",
        location: "Dummy",
        avatar_url: "Dummy.com",
      },
    };
    console.log("Child constructor");
  }
  async componentDidMount() {
    // as useEffect - API calls
    // console.log("Child did mount");
    const data = await fetch("https://api.github.com/users/Shyam-Vishwakarma");
    const jsonData = await data.json();
    this.setState({
      userInfo: jsonData,
    });
  }
  componentDidUpdate() {
    console.log("component updated");
    this.timer = setInterval(() => console.log("Counter"), 1000);
    // When state variable changed -> react re render the dom -> updates dom
  }
  componentWillUnmount() {
    clearInterval(this.timer); // Clear this when leaving the page
    console.log("Component will unmount");
    // when we are about to leave that page
  }
  render() {
    // debugger;
    const { name, location, avatar_url } = this.state.userInfo;
    console.log("Child render");
    return (
      <>
        <div>
          <img
            style={{ margin: "2rem 2rem" }}
            src={avatar_url}
            className="image"
          ></img>
          <h2 style={{ margin: "2rem 2rem", fontSize: "2rem" }}>
            Name: {name}
          </h2>
          <h3 style={{ margin: "1rem 2rem", fontSize: "2rem" }}>
            Location: {location}
          </h3>
        </div>
      </>
    );
  }
}
export default UserClass;

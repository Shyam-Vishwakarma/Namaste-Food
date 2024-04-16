import React, { useReducer } from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { location } = this.props;
    return (
      <>
        <div className="user--card">
          <h2>Name: {this.props.name}</h2>
          <h3>Location: {location}</h3>
          <h4>Contact: @GoldIsLove</h4>
        </div>
      </>
    );
  }
}
export default UserClass;

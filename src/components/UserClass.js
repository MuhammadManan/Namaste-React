import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    // creating state variable in Class
    this.state = {
      count: 0,
      count1: 2,
    };
  }
  render() {
    const { name, location } = this.props;
    const { count } = this.state;
    return (
      <div className="user-container">
        <h2>Count: {count}</h2>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          click
        </button>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: mooni@gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;

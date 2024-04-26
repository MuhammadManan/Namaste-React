import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    // creating state variable in Class
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "noWhere",
      },
    };

    // console.log(this.props.name, " Constructor");
  }

  async componentDidMount() {
    // console.log(this.props.name, " ComponentDidMount");

    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();
    // console.log(json);

    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { name, location } = this.state.userInfo;
    // console.log(name, " render()");
    return (
      <div className="user-container">
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: mooni@gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;

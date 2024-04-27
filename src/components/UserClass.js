import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    // creating state variable in Class
    this.state = {
      count: 0,
      userInfo: {
        name: "Dummy",
        location: "noWhere",
      },
    };
    // console.log("constructor is called");
    // console.log(this.props.name, " Constructor");
  }

  async componentDidMount() {
    // console.log(this.props.name, " ComponentDidMount");

    const data = await fetch("https://api.github.com/users/muhammadmanan");
    const json = await data.json();
    // console.log(json);

    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { login, id, location } = this.state.userInfo;
    // console.log(name, " render()");
    return (
      <div className="user-container">
        <h2>Name: {login || "Manan Azhar"}</h2>
        <h2>UserId: {id || "null"}</h2>
        <h3>Location: {location || "Islamabad"}</h3>
        <h4>Contact: mooni@gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;

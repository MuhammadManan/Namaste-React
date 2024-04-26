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
    console.log("constructor is called");
    // console.log(this.props.name, " Constructor");
  }

  // async componentDidMount() {
  //   // console.log(this.props.name, " ComponentDidMount");

  //   const data = await fetch("https://api.github.com/users/akshaymarch7");
  //   const json = await data.json();
  //   // console.log(json);

  //   this.setState({
  //     userInfo: json,
  //   });
  // }

  // render() {
  //   const { name, location } = this.state.userInfo;
  //   // console.log(name, " render()");
  //   return (
  //     <div className="user-container">
  //       <h2>Name: {name || "Manan Azhar"}</h2>
  //       <h3>Location: {location || "Islamabad"}</h3>
  //       <h4>Contact: mooni@gmail.com</h4>
  //     </div>
  //   );
  // }

  componentDidMount() {
    console.log("DidMount is called");
  }

  componentDidUpdate() {
    console.log("DidUpdate is called");
  }
  componentWillUnmount() {
    console.log("WillUncommit is called");
  }
  render() {
    console.log("render is called");
    const { count } = this.state;
    const { name, location } = this.state.userInfo;
    return (
      <div className="user-container">
        <h1>Count :{count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: count + 1,
            });
          }}
        >
          click me
        </button>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
      </div>
    );
  }
}

export default UserClass;

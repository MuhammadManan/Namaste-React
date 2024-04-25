import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);

    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent componentDidMount");
  }

  render() {
    console.log("Parent render()");
    return (
      <div className="about-container">
        <h1>About Us</h1>
        <h2>We're really getting healthy!</h2>
        {/* <User name={"Hanan Azhar (functional)"} /> */}
        <UserClass name={"Manan Azhar (Class)"} location={"Islamabad"} />;
      </div>
    );
  }
}

export default About;

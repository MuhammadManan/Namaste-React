import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <h2>We're really getting healthy!</h2>
      <User name={"Hanan Azhar (functional)"} />
      <UserClass name={"Manan Azhar (Class)"} location={"Islamabad"} />;
    </div>
  );
};

export default About;

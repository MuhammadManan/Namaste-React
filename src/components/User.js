import { useState } from "react";

const User = (props) => {
  const { name } = props;
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(1);
  return (
    <div className="user-container">
      <h2>Count: {count}</h2>
      <h2>Count1: {count1}</h2>
      <h2>Name: {name}</h2>
      <h3>Location: Lahore</h3>
      <h4>Contact: mooni@gmail.com</h4>
    </div>
  );
};

export default User;

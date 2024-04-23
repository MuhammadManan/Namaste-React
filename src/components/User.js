const User = (props) => {
  const { name } = props;
  return (
    <div className="user-container">
      <h2>Name: {name}</h2>
      <h3>Location: Lahore</h3>
      <h4>Contact: mooni@gmail.com</h4>
    </div>
  );
};

export default User;

import './Login.css';
import { useState } from 'react';

export const Login = () => {

  const [user, setUser] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    phoneNo: ""
  });

  const handleUser = (e) => {
    const { name, value } = e.target;
    setUser(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <>
      <h1>
        Name: {user.fname} {user.lname} ,
        Email: {user.email} ,
        Phone: {user.phoneNo} .
      </h1>

      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="fname">First Name:</label>
        <input
          id="fname"
          type="text"
          placeholder="First Name"
          name="fname"
          value={user.fname}
          onChange={handleUser}
        />

        <label htmlFor="lname">Last Name:</label>
        <input
          id="lname"
          type="text"
          placeholder="Last Name"
          name="lname"
          value={user.lname}
          onChange={handleUser}
        />

        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          placeholder="Email Address"
          name="email"
          value={user.email}
          onChange={handleUser}
        />

        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          placeholder="Password"
          name="password"
          value={user.password}
          onChange={handleUser}
        />

        <label htmlFor="phoneNo">Phone No:</label>
        <input
          id="phoneNo"
          type="number"
          placeholder="Phone Number"
          name="phoneNo"
          value={user.phoneNo}
          onChange={handleUser}
        />

        <button type="submit" >Login</button>
      </form>
    </>
  );
};

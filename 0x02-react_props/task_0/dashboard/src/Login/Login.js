import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <>
      <h2>Login</h2>
      <form>
        <label>Username:</label>
        <input type="text" />
        <br />
        <label>Password:</label>
        <input type="password" />
        <br />
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;

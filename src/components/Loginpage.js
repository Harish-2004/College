// LoginPage.js
import React from 'react';
import './LoginPage.css'; // Assuming you have a corresponding CSS file

const LoginPage = () => {
  return (
    <div>
      <h1>Internship Management platform</h1>
      <form action="intern.html" className="loginpage">
        <label htmlFor="log">Login</label> <br />
        <input id="log" type="text" className="logintext" defaultValue="loginid" /> <br />
        <label htmlFor="pass">Password</label> <br />
        <input id="pass" type="text" className="logintext" defaultValue="password" /> <br />
        <div className="buttons-need">
          <button type="submit">Submit</button>
          <input
            type="button"
            className="Signupbtn"
            onClick={() => (window.location.href = 'Signup.html')}
            value="Signup"
          />
        </div>
      </form>
    </div>
  );
};

export default LoginPage;

// SignupPage.js
import React from 'react';
import './SignupPage.css'; // Assuming you have a corresponding CSS file

const SignupPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    window.location.href = 'newfile.html';
  };

  return (
    <div>
      <h1>SIGNUP PAGE</h1>
      <form action="" className="container" onSubmit={handleSubmit}>
        <label htmlFor="Email">Email</label>
        <input type="text" defaultValue="email" />
        <label htmlFor="password">Password</label>
        <input type="text" defaultValue="password" />
        <label htmlFor="newpassword">New Password</label>
        <input type="text" defaultValue="password" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default SignupPage;

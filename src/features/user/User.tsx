import Header from 'component/header/Header';
import NavBar from 'component/navBar/NavBar';
import React from 'react';
import './user.css';

const User = () => {
  return (
    <div className="user">
      <div className="userNav">
        <NavBar />
      </div>

      <div className="userView">
        <Header />
        <div className="userInfo">here user information!!</div>
      </div>
    </div>
  );
};

export default User;

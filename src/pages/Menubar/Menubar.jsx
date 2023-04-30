import React from 'react';
import { Link } from 'react-router-dom';
import './Menubar.css'

const Menubar = () => {
    return (
        <div className="Menubar-container">
        <div className="logo">logo</div>
        <div className="menu-container">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/services">
            <li>Services</li>
          </Link>
  
          {/* {user?.email ? (
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          ) : ( */}
            <Link to="/login">
              <li>Login</li>
            </Link>
          {/* )} */}
          {/* <li>{user?.email}</li> */}
          <Link to="/register">
            <li>Registration</li>
          </Link>
  
          {/* <li>home</li>
          <li>sds</li>
          <li>asdsa</li>
          <li>asdas</li> */}
        </div>
      </div>
    );
};

export default Menubar;
import React, { use } from "react";
import { Link, NavLink } from "react-router";
import userIcon from "../assets/user.png";
import { AuthContext } from "../contexts/AuthContext/AuthContext";
const Navbar = () => {
  const { user, logOutUser } = use(AuthContext);
  console.log(user);
  const handleLogOut = () => {
    logOutUser()
  }
  
  return (
    <div className="flex justify-between items-center">
      <div className=""></div>
      <div className="nav flex gap-5 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="login-btn flex gap-5">
        {user ? <img className="ml-4 rounded-full" width={40} height={40} src={user.photoURL} alt="" /> : (
          <img className="ml-4" src={userIcon} alt="" />
        )}

        {user? <Link onClick={handleLogOut} to="/login" className="btn btn-primary px-10 ">
            Log Out
          </Link>
          
         : (
          <Link to="/login" className="btn btn-primary px-10 ">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;

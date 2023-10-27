import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home Feed
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/profile" className="nav-link">
            My Profile
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/friend-requests" className="nav-link">
            Manage Friend Requests
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/friend-profile" className="nav-link">
            Friend Profiles
          </Link>
        </li>
        <ul className="sub-nav">
          <li className="nav-item">
            <Link to="/create-post" className="nav-link">
              Create New Post
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/view-edit-post" className="nav-link">
              View/Edit Post
            </Link>
          </li>
        </ul>
      </ul>
    </nav>
  );
};
export default Navbar;

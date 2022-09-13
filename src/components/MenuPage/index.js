import "./MenuPage.scss";
import React from "react";
import { Link, NavLink } from "react-router-dom";

export function Menu() {
  const routes = [
    {
      to: "/",
      text: "Home",
    },
    {
      to: "/blog",
      text: "Blog",
    },
    {
      to: "/profile",
      text: "Profile",
    },
  ];

  return (
    <nav>
      <ul>
        {routes.map((route, index) => (
          <li key={route.to}>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "red" : "blue",
              })}
              to={route.to}
            >
              {route.text}
            </NavLink>
          </li>
        ))} 
      </ul>
      {/* <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blog">blog</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
      </ul> */}
      {/* <li>
        <NavLink
          //className={({isActive}) => ''}
          style={({ isActive }) => ({
            color: isActive ? "red" : "blue",
          })}
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blog"
          style={({ isActive }) => ({
            color: isActive ? "red" : "blue",
          })}
        >
          Blog
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/profile"
          style={({ isActive }) => ({
            color: isActive ? "red" : "blue",
          })}
        >
          Profile
        </NavLink>
      </li> */}
    </nav>
  );
}

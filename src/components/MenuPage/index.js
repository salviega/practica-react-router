import "./MenuPage.scss";
import React from "react";
import { Link, NavLink } from "react-router-dom";

export function MenuPage() {
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
    {
      to: "/login",
      text: "Login",
    },
    {
      to: "/logout",
      text: "Logout",
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
    </nav>
  );
}

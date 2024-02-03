import React from "react";
import image from "../../assets/react.svg";
import './navbar.css';

export default function Navbar() {
  return (
    <>
          <h2 className="titletext">
           <button>Menu</button>
           <button>Events</button>
           <button>Contact</button>
          </h2>
        </>
  );
}

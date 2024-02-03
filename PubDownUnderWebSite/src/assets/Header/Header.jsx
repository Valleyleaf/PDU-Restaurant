import React from "react";
import image from "../../assets/react.svg";
import './header.css';

export default function Header() {
  return (
    <>
    <div className="HeaderRoot">
        <h2 className="titletext">
        Pub Down Under
        </h2>
    </div>

    <div className="HeaderMenu">
        <button>Menu</button>
        <button>Events</button>
        <button>Contact</button>
    </div>
    </>
  );
}

import React from "react";
import image from "../../assets/react.svg";
import './main.css';

export default function Main() {
  return (
    <>
    <div className="landingPage">

            <a className="linker uptownBG" href="/Location1">
            <h2>Location 1</h2>
            <p>Prince William St · (506) xxx-xxxx</p>
            </a>
           

           

           <a className="linker northBG" href="/Location2">
           <h2>Location 2</h2>
           <p>xxx Main St · (506) xxx-xxxx</p>
           </a>

    </div>
    </>
  );
}

import React from "react";
import image from "../../assets/react.svg";
import './main.css';

export default function Main() {
  return (
    <>
    <div className="landingPage">

            <a className="linker uptownBG" href="/Uptown">
            <h2>Uptown</h2>
            <p>88 Prince William St · (506) 633-7062</p>
            </a>
           

           

           <a className="linker northBG" href="/North">
           <h2>Down Under</h2>
           <p>400 Main St, Saint John, NB E2K 1J4</p>
           </a>

    </div>
    </>
  );
}

import React from "react";
import { Link, useLocation } from 'react-router-dom';
import pbuicon from '../img/pbuicon.png'
import image from "../../assets/react.svg";
import './header.css';

export default function Header() {
  return (
    <>
    <div className="HeaderRoot">
        <Link
          to="/"
          
          >
            <img className='pbuicon' src={pbuicon} alt="" />
        </Link>
    </div>
    </>
  );
}

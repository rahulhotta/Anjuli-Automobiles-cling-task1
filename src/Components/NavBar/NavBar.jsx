import React from "react";
import "./NavBar.css";
import { AiFillHome } from "react-icons/ai";
import { RiMotorbikeFill } from "react-icons/ri";
import { MdOutlineDesignServices } from "react-icons/md";
import { FaHandshake } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { useState } from "react";


function NavBar() {

  const [name, setName] = useState("Home");
  return (
    <div>
      <nav className="navBar__container">
        <a
          href="#Home"
          className={
            name === "Home" ? "navBar__icon active" : "navBar__icon"
          }
          onClick={() => {
            setName("Home");
          }}
        >
          <AiFillHome /> 
        </a>
        <a
          href="#Products"
          className={
            name === "Products"
              ? "navBar__icon active"
              : "navBar__icon"
          }
          onClick={() => {
            setName("Products");
          }}
        >
          <RiMotorbikeFill />
        </a>
        <a
          href="#Services"
          className={
            name === "Services"
              ? "navBar__icon active"
              : "navBar__icon"
          }
          onClick={() => {
            setName("Services");
          }}
        >
          <MdOutlineDesignServices />
        </a>
        <a
          href="#HotDeals"
          className={
            name === "HotDeals"
              ? "navBar__icon active"
              : "navBar__icon"
          }
          onClick={() => {
            setName("HotDeals");
          }}
        >
          <FaHandshake />
        </a>
        <a
          href="#contact"
          className={
            name === "contact"
              ? "navBar__icon active"
              : "navBar__icon"
          }
          onClick={() => {
            setName("contact");
          }}
        >
          <IoMdContact />
        </a>
      </nav>
    </div>
  );
}

export default NavBar;

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
          onClick={() => {
            setName("Home");
          }}
          className={name === "Home" ? "navBar__link active" : "navBar__link"}
        >
          <AiFillHome className="navBar__icon" />
          <span className="navBar__text">HOME</span>
        </a>
        <a
          href="#Products"
          onClick={() => {
            setName("Products");
          }}
          className={
            name === "Products" ? "navBar__link active" : "navBar__link"
          }
        >
          <RiMotorbikeFill className="navBar__icon" />
          <span className="navBar__text">PRODUCTS</span>
        </a>
        <a
          href="#Services"
          onClick={() => {
            setName("Services");
          }}
          className={
            name === "Services" ? "navBar__link active" : "navBar__link"
          }
        >
          <MdOutlineDesignServices className="navBar__icon" />
          <span className="navBar__text">SERVICES</span>
        </a>
        <a
          href="#HotDeals"
          onClick={() => {
            setName("HotDeals");
          }}
          className={
            name === "HotDeals" ? "navBar__link active" : "navBar__link"
          }
        >
          <FaHandshake className="navBar__icon" />
          <span className="navBar__text">DEALS</span>
        </a>
        <a
          href="#contact"
          onClick={() => {
            setName("contact");
          }}
          className={
            name === "contact" ? "navBar__link active" : "navBar__link"
          }
        >
          <IoMdContact className="navBar__icon" />
          <span className="navBar__text">CONTACT</span>
        </a>
      </nav>
    </div>
  );
}

export default NavBar;

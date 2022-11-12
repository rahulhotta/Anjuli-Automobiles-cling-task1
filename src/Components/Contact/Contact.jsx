import React from "react";

import { BsFacebook, BsInstagram } from "react-icons/bs";

import "./Contact.css";
function Contact() {
  return (
    <div className="Contact__container" id="contact">
      <div className="Contact__social">
        <b>FOllOW US</b> <br />
        <BsFacebook className="Contact__icon" />
        <BsInstagram className="Contact__icon" />
      </div>
      <div className="Conatct__support">
        <b>SUPPORT</b> <br />
        Contact our Stores <br />
        Delivery
      </div>
      <div className="Contact__about">
        <b>ABOUT</b> <br />
        <p>
          Anjuli Automobiles pvt ltd.
          <br /> &copy;All Rights Reserverd.
        </p>
      </div>
      <div className="Contact__legal">
        <b>LEGAL</b> <br />
        Return Policy <br />
        Terms and Conditions <br />
        Privacy Policy
      </div>
      <div className="Contact__mobile1">
        <b>CONTACT</b> <br />
        8750270991,
        <br />
        9873580735
        <br />
        10AM to 8PM
      </div>
      <div className="Contact__address">
        <b>ADDERESS</b> <br />
        Block-1, Mathura Rd,
        <br /> Mohan cooperative industrial estate,
        <br /> New Delhi-110044
      </div>
    </div>
  );
}

export default Contact;

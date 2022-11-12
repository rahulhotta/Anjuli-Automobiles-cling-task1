import React from 'react';

import './Services.css';

import serviceImage1 from "../../Images/Services-image1.jpeg";
import serviceImage2 from "../../Images/Services-image2.jpeg";
import serviceImage3 from "../../Images/Services-image3.jpeg";
import serviceImage4 from "../../Images/Services-image4.jpeg";
import serviceImage5 from "../../Images/Services-image5.jpeg";
import serviceImage6 from "../../Images/Services-image6.jpeg";

import { BsFillHandIndexThumbFill, BsArrowLeftRight } from "react-icons/bs";
import { GiReceiveMoney } from "react-icons/gi";
import { FaMotorcycle, FaThumbsUp } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";

import ServicesCard from './Services_card/ServicesCard'
function Services() {
    const servicesContainer = [
      {
        id: 1,
        icon: <BsFillHandIndexThumbFill className="servicesCard__icon" />,
        heading: "ONLINE BOOKING",
        desc: "You can book your bike online with minimum amount of Rs 10,000/- Get payment confirmation invoice on your E-mail.",
        img: serviceImage1,
      },
      {
        id: 2,
        icon: <BsArrowLeftRight className="servicesCard__icon" />,
        heading: "PICK UP & DROP FACILITY",
        desc: "Your bike needs servicing,don't waste time! Call us for servicing and Get the pick and drop facility at home.",
        img: serviceImage2,
      },
      {
        id: 3,
        icon: <GiReceiveMoney className="servicesCard__icon" />,
        heading: "REFUNDABLE BOOKING AMOUNT",
        desc: "Afraid of non refundable bookings. Get your booking done at home or showroom with the refundable amount.",
        img: serviceImage3,
      },
      {
        id: 4,
        icon: <FaMotorcycle className="servicesCard__icon" />,
        heading: "FREE TEST RIDE AT HOME",
        desc: "Afraid of non refundable bookings. Get your booking done at home or showroom with the refundable amount.",
        img: serviceImage4,
      },
      {
        id: 5,
        icon: <FaThumbsUp className="servicesCard__icon" />,
        heading: "HOME BOOKING & DELIVER",
        desc: "Can't visit showroom or no time to pick your bike. Get your booking and delivery done at home.Just give us a call..",
        img: serviceImage5,
      },
      {
        id: 6,
        icon: <MdLocationPin className="servicesCard__icon" />,
        heading: "ANJULI AUTOMOBILES",
        desc: "A-15, Block-1, Mathura Rd,Mohan cooperative industrial estate,New Delhi-110044",
        img: serviceImage6,
      },
    ];
  return (
    <div className="services__container" id='Services'>
      <h1 className="services__heading">
        <span className="services__heading__first">S</span>
        <span className="services__heading__second">ervices</span>
      </h1>
      <div className="services__list">
        {servicesContainer.map((service) => {
          return (
            <ServicesCard
              key={service.id}
              icon={service.icon}
              heading={service.heading}
              desc={service.desc}
              img={service.img}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Services
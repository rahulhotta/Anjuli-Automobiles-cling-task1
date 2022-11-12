import React from 'react';
import "./ServicesCard.css";
function ServicesCard(props) {
  return (
    <div className="servicesCard__container1">
      <img src={props.img} className="servicesCard__img" />
      <div className="servicesCard__container" id="Services">
        <div className="servicesCard__icon__container">
          {props.icon}
        </div>
        <div className="servicesCard__heading__container">
          <h1 className="servicesCard__heading">{props.heading}</h1>
        </div>
        <div>
          <p className="servicesCard__desc">{props.desc}</p>
        </div>
      </div>
    </div>
  );
}

export default ServicesCard
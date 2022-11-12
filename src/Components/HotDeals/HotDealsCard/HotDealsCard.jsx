import React from 'react';

import './HotDealsCard.css';


function HotDealsCard(props) {

  return (
    <div className="dealsCard__container">
      <div className="dealsCard__image__container">
        <img src={props.img} className="dealsCard__image" />
      </div>

        <h1 className="dealsCard__bikeName">{props.name}</h1>
        <h3 className="dealsCard__bikeName2">ROYAL ENFIELD</h3>

    </div>
  );
}

export default HotDealsCard
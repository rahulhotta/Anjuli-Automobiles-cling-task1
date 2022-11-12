import React from 'react';

import HotDealsCard from './HotDealsCard/HotDealsCard';

import dealImage1 from '../../Images/deals-image1.jpg';
import dealImage2 from '../../Images/deals-image2.jpg';
import dealImage3 from '../../Images/deals-image3.jpg';
import dealImage4 from '../../Images/deals-image4.jpg';
import dealImage5 from '../../Images/deals-image5.jpg';
import dealImage6 from '../../Images/deals-image6.jpg';
import dealImage7 from '../../Images/deals-image7.jpeg';
import dealImage8 from '../../Images/deals-image8.jpg';
import dealImage9 from '../../Images/deals-image9.jpg';

import Carousel from "react-bootstrap/Carousel";

import './HotDeals.css';

function HotDeals() {
const dealsList = [
  {
    id: 1,
    img: dealImage1,
    name: "Hunter 350 2022",
  },
  {
    id: 2,
    img: dealImage2,
    name: "SCRAM 411 2022",
  },
  {
    id: 3,
    img: dealImage3,
    name: "METEOR 350",
  },
  {
    id: 4,
    img: dealImage4,
    name: "INTERCEPTOR",
  },
  {
    id: 5,
    img: dealImage5,
    name: "HIMALAYAN",
  },
  {
    id: 6,
    img: dealImage6,
    name: "THUNDERBIRD X 500",
  },
  {
    id: 7,
    img: dealImage7,
    name: "CLASSIC 350 SIGNALS",
  },
  {
    id: 8,
    img: dealImage8,
    name: "CLASSIC 350 GUNMETAL",
  },
  {
    id: 9,
    img: dealImage9,
    name: "THUNDERBIRD 350 X",
  }
];
  return (
    <div className='deals__container' id='HotDeals'>
      <h1 className="deals__heading">
        <span className="deals__heading__first">Featured</span>
        <span className="deals__heading__second">Hot deals</span>
      </h1>
      <Carousel>
        {dealsList.map((deal) => {
          return (
            <Carousel.Item>
              <HotDealsCard key={deal.id} img={deal.img} name={deal.name} />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}

export default HotDeals
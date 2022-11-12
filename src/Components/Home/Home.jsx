import React from 'react'
import './Home.css'
function Home() {
  return (
    <div className="home__container" id="Home">
      <h1 className="home__heading">
        <span className="home__heading__welcome">WELCOME</span> <br/> TO <br />{" "}
        <span className="home__heading__name"> ANJULI AUTOMOBILES</span>
      </h1>
      <p className="home__para">
        Quality is Remembered long, <br />
        After the price is Forgotten !!
      </p>
    </div>
  );
}

export default Home
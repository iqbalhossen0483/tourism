import React from "react";
import Banner from "./Banner";
import Gallery from "./Gallery";
import Service from "./Service";
import Subcription from "./Subcription";

const Home = () => {
  return (
    <div>
      <Banner />
      <Service>
        <h2 className='header'>Find best places forever</h2>
      </Service>
      <Subcription />
      <Gallery />
    </div>
  );
};

export default Home;

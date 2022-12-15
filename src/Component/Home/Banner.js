import React from "react";

const Banner = () => {
  return (
    <div className='banner-container'>
      <div className='bg-[#34353297] py-20'>
        <p className='heading'>Tour whole world and enhance your knowdlege</p>
        <p className='text-lg font-medium text-gray-200'>
          Find your best places
        </p>
        <div className='flex justify-center mt-10'>
          <button className='banner-btn'>Subscribe now</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

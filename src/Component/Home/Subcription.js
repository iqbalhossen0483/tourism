import React from "react";

const Subcription = () => {
  return (
    <div className='sub-container'>
      <h3 className='header mt-0'>Stay with us</h3>
      <div className='sub-wrapper'>
        <input type='text' placeholder='Where to?' />
        <input className='w-64' type='date' placeholder='Select date' />
        <input type='text' placeholder='Destination?' />
        <input className='btn ml-5' type='submit' value='Subscribe' />
      </div>
    </div>
  );
};

export default Subcription;

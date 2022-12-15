import React from "react";

const Footer = () => {
  return (
    <div className='footer-wrapper'>
      <div>
        <p className='text-lg mb-2 font-medium'>Contact Info</p>
        <p>
          <span className='font-medium'>PHONE:</span> Toll Free (123) 456-7890
        </p>
        <p>
          <span className='font-medium'>EMAIL:</span> mail@cycle-mart.com
        </p>
        <p>
          <span className='font-medium'>ADDRESS:</span> 123 Street, Dhaka,
          Bangladesh
        </p>
        <p>
          <span className='font-medium'>WORKING DAYS / HOURS:</span> Mon - Sun /
          9.00 AM - 8.00 PM
        </p>
      </div>
      <div className='my-5 md:my-0'>
        <p className='text-lg mb-2 font-medium'>My Account</p>
        <p>About Us</p>
        <p>Order History</p>
        <p>Returns</p>
        <p>Customer Services</p>
        <p>Terms & Conditions</p>
      </div>
      <div>
        <p className='text-lg mb-2 font-medium'>Get in touch</p>
      </div>
    </div>
  );
};

export default Footer;

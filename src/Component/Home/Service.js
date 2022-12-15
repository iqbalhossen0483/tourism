import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Service = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://myserver-production-ddf8.up.railway.app/tourism/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      })
      .finally(() => setIsLoading(false));
  }, []);
  if (isLoading) {
    return (
      <div className='h-screen flex justify-center items-center'>
        <div className='spinner'></div>
      </div>
    );
  }
  return (
    <div className='px-3 md:px-10 py-5'>
      {children}
      <div className='service-container'>
        {services.map((service) => (
          <div key={service._id} className='item'>
            <img
              className='h-40 w-full object-cover rounded-t'
              src={service.img}
              alt=''
            />
            <h3 className='text-xl font-medium my-3 text-center gradient'>
              {service.name}
            </h3>
            <p className='px-3 text-justify text'>{service.description}</p>
            <div className='flex justify-center my-3 pb-3 md:pb-0'>
              <Link to={`/place-order/${service._id}`}>
                <button className='btn'>Book now</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;

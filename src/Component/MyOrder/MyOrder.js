import React, { useEffect, useState } from "react";
import useAuth from "../Firebase/useAuth";

const MyOrder = () => {
  const [orders, setOders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useAuth();
  useEffect(() => {
    fetch("https://server.switchcafebd.com/tourism/orders")
      .then((res) => res.json())
      .then((data) => {
        const userOder = data.filter((order) => order.email === user.email);
        setOders(userOder);
        setIsLoading(false);
      });
  }, [user.email]);

  //delete order
  const handleDelete = (id) => {
    const confirm = window.confirm("Are you sure to delete this?");
    if (confirm) {
      fetch(`https://server.switchcafebd.com/tourism/orders/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const remain = orders.filter((order) => order._id !== id);
          setOders(remain);
        });
    }
  };

  if (isLoading) {
    return (
      <div className='h-screen flex justify-center items-center'>
        <div className='spinner'></div>
      </div>
    );
  }
  return (
    <div className='my-10 mx-5 md:mx-10'>
      <table className='w-full'>
        <thead>
          <tr>
            <th>Customer Details</th>
            <th>Tour Details</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order) => (
            <tr key={order._id}>
              <td>
                <p>Name: {order.name}</p>
                <p className='hidden md:block'>Email: {order.email}</p>
              </td>
              <td>
                <p>Location: {order.location}</p>
                <p>Destination: {order.destination}</p>
                <p>Date: {order.date}</p>
                <p>Type: {order.type}</p>
              </td>
              <td>
                <div className='flex'>
                  <p className='text-green-400'>{order.status}</p>
                  <button
                    onClick={() => handleDelete(order._id)}
                    className='myorder-btn'
                  >
                    Cancel
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyOrder;

import React, { useEffect, useState } from "react";
const ManageOrder = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [update, setUpdate] = useState(false);
  const [orders, setOders] = useState([]);

  useEffect(() => {
    fetch("https://myserver-production-ddf8.up.railway.app/tourism/orders")
      .then((res) => res.json())
      .then((data) => {
        setOders(data);
        setIsLoading(false);
      });
  }, [update]);

  //delete order
  const handleDelete = (id) => {
    fetch(
      `https://myserver-production-ddf8.up.railway.app/tourism/orders/${id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          alert("Deleted successfully");
          setUpdate((prev) => !prev);
        }
      });
  };
  //update
  const updateOrder = (id) => {
    fetch(
      `https://myserver-production-ddf8.up.railway.app/tourism/orders/${id}`,
      {
        method: "PUT",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          alert("Tour Approved");
          setUpdate((prev) => !prev);
        }
      });
  };
  if (isLoading) {
    return (
      <div className='h-screen flex justify-center items-center'>
        <div className='spinner'></div>
      </div>
    );
  }

  return (
    <table className='w-full my-10'>
      <thead>
        <tr>
          <th>Customer Details</th>
          <th>Order Details</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order) => (
          <tr key={order._id}>
            <td>
              <p>Name: {order.name}</p>
              <p>Email: {order.email}</p>
            </td>
            <td>
              <p>Location: {order.location}</p>
              <p>Destination: {order.destination}</p>
              <p>Date: {order.date}</p>
              <p>Type: {order.type}</p>
            </td>
            <td>
              <p className='text-green-400'>{order.status}</p>
              <div className='flex  justify-center items-center'>
                {order.status !== "approved" && (
                  <button
                    onClick={() => updateOrder(order._id)}
                    className='border rounded mx-3 py-1 px-3'
                  >
                    Approve
                  </button>
                )}
                <button
                  onClick={() => handleDelete(order._id)}
                  className='border rounded py-1 px-3'
                >
                  delete
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ManageOrder;

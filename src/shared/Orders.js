import fetch from "isomorphic-fetch";
import React, { useEffect, useState } from "react";

const Cart = ({}) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/order")
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        setItems(data);
      });
  }, []);
  console.log(items, "items1233");
  const getItems = (items) => {
    return (
      <>
        {items.map((item) => {
          return (
            <>
              <div>quantity--{item.quantity}</div>{" "}
              <div>price--{item.price}</div>
            </>
          );
        })}
      </>
    );
  };

  return (
    <>
      {items?.data?.map((orderItems) => {
        return (
          <>
            <h1>{orderItems.user.name}</h1>
            {getItems(orderItems.items)}
          </>
        );
      })}
    </>
  );
};
export default Cart;

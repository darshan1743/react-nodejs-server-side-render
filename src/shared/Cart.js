import fetch from "isomorphic-fetch";
import React, { useEffect, useState } from "react";

const Cart = ({}) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/cart")
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        setItems(data);
      });
  }, []);

  return <>'Cart'</>;
};
export default Cart;

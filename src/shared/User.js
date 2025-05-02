import fetch from "isomorphic-fetch";
import React, { useEffect, useState } from "react";

const User = ({}) => {
  const [items, setItems] = useState([]);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/user")
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        setItems(data)
      });
  }, []);

  const handleAddToCart = (item) => {
    setCartData([...cartData, item]);
  };



  return (
    <>
     'User'
    </>
  );
};
export default User;

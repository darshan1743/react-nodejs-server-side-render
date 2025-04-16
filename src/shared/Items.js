import fetch from "isomorphic-fetch";
import React, { useEffect, useState } from "react";

const Items = ({}) => {
  const [items, setItems] = useState([]);
  console.log(items, "called1233");

  useEffect(() => {
    fetch("http://localhost:3000/items")
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        setItems(data);
      });
  }, []);
  return (
    <>
      {items?.map((item) => {
        return <div>{item.name}</div>;
      })}
    </>
  );
};
export default Items;

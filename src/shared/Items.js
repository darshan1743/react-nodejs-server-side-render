import fetch from "isomorphic-fetch";
import React, { useEffect, useState } from "react";
import Item from "./components/Item";

const Items = ({}) => {
  const [items, setItems] = useState([]);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/items")
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        setItems(
          data?.data.map((_item) => {
            return {
              quantity: 0,
              ..._item,
            };
          })
        );
      });
  }, []);

  const handleAddToCart = (item) => {
    setCartData([...cartData, item]);
  };

  const handleOrder = () => {
    const _cartData = cartData.map((item) => {
      const _item = {
        quantity: item.quantity,
        price: item.price,
        id: item._id,
      };
      return _item;
    });
    fetch("http://localhost:3000/api/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ cartData: _cartData, user: "keerthana" }),
    })
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        console.log("ordered");
      });
  };

  return (
    <>
      <div class="container">
        <div class="row">
          {items?.map((item) => {
            return <Item item={item} handleAddToCart={handleAddToCart} />;
          })}

          <button
            type="button"
            class="btn btn-primary"
            onClick={() => handleOrder()}
          >
            Place order
          </button>
        </div>
      </div>
    </>
  );
};
export default Items;

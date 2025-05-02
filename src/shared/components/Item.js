import React, { useEffect, useState } from "react";

const Item = ({ item, handleAddToCart }) => {
  const handleChange = (item, change) => {
    if (change == "add") {
      item.quantity = item.quantity + 1;
    } else {
      if (item.quantity >= 0) {
        item.quantity = item.quantity - 1;
      }
    }
    console.log(item, "calleedd");

    handleAddToCart(item);
  };
  return (
    <div class="col-sm">
      <div class="card" style={{ maxWidth: "400px" }}>
        <div class="card-body">
          <h5 style={{ color: "black" }} class="card-title">
            {item.name}
          </h5>
          <p style={{ color: "black" }} class="card-text">
            {item.description || "desc"}
          </p>
          <button type="button" class="btn btn-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-dash"
              viewBox="0 0 16 16"
              onClick={() => handleChange(item, "add")}
            >
              <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8" />
            </svg>
            {item.quantity}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-plus"
              viewBox="0 0 16 16"
              onClick={() => handleChange(item, "sub")}
            >
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Item;

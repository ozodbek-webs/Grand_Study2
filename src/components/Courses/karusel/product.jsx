
import React from "react";

export default function Product(props) {
  return (
    <div className="card" style={{
      width: "200px",
      height: "130px",
      backgroundColor: "#F4BF21",
      borderRadius: "20px",
    }}>
      <img className="product--image" style={{ marginLeft: "75px", width: "50px", height: "50px", marginTop: "15px" }} src={props.url} alt="product image" />
      <h2>{props.name}</h2>
    </div>
  );
}

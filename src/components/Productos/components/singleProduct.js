import React from "react";
import "./singleProduct.css";

const SingleProduct = props => {
  if (!props) return null;
  const { nombre, precio, imagen, descripcion } = props.producto;
  return (
    <div className="info-producto">
      <div className="imagen">
        <img src={`/img/${imagen}.png`} alt={nombre} />
      </div>
      <div className="info">
        <h2>Nombre de la camisa</h2>
        <p className="precio">$ {precio}</p>
        <p>{descripcion}</p>
      </div>
    </div>
  );
};

export default SingleProduct;

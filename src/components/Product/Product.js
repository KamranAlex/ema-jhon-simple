import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faCartPlus } from "@fortawesome/free-solid-svg-icons";

const Product = (props) => {
  //   console.log(props);
  const { name, img, seller, price, stock } = props.product;
  return (
    <div className='product'>
      <div className='product-img'>
        <img src={img} alt='' />
      </div>
      <div className='product-details'>
        <h3 className='product-name'>{name}</h3>
        <br />
        <p>
          <small>By: {seller}</small>
        </p>
        <p>${price}</p>
        <p>
          <small>Only {stock} item left- Order Soon</small>
        </p>
        <button
          className='main-button'
          onClick={() => props.handleProductAdd(props.product)}
        >
          <FontAwesomeIcon icon={faCartPlus} /> Add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;

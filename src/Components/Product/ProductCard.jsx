import React, { useState, useContext, useEffect } from "react";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import classes from "./Product.module.css";
import { Link } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider"
import { Type } from "../../Utility/action.type";
import Rating from "@mui/material/Rating";


const ProductCard = ({ product, flex, renderDesc, renderAdd }) => {
  const { image, title, id, price, description } = product;

  const [rate, setRate] = useState(1);
  const [count, setCount] = useState(1);
  useEffect(() => {
  
     function getRandomDecimal(min, max) {
       return Math.floor(Math.random() * (max - min) + min);
     }

     // Example usage:
     const min = 1; 
     const max = 500; 
     const randomDecimal = getRandomDecimal(min, max);
     const rating = (randomDecimal / 100).toFixed(1);
    setCount(randomDecimal);
    // console.log(randomDecimal)
    setRate(rating);
    // console.log(rating)
  },[])
 

  const [state, dispatch] = useContext(DataContext);
  // console.log(state)
  // Add to Cart Handler
  const addToCart = () => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: {
        image,
        title,
        id,
        price,
        description,
      },
    });
  };

  return (
    <div
      className={`${classes.card__container} ${
        flex ? classes.product__flexed : ""
      }`}
    >
      <Link to={`/products/${id}`}>
        <img src={image} alt="" className={classes.img__container} />
      </Link>
      <div className={classes.title}>
        <h3>{title}</h3>
        {renderDesc && (
          <div className={classes.description} style={{ maxWidth: "750px" }}>
            {description}
          </div>
        )}
        <div className={classes.rating}>
          <div className={classes.rateCount}>
            <div></div>
            {
              <Rating
                name="half-rating"
                value={rate}
                precision={0.5}
                className={classes.rating}
              />
            }
          </div>
          <div className={classes.rateCount}>{<small>{count}</small>}</div>
          {/* <div className={classes.count}>
            { }
          </div> */}
        </div>
        <div>
          {/* price */}
          <CurrencyFormat amount={price} />
        </div>
        {renderAdd && (
          <button className={classes.button} onClick={addToCart}>
            add to cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;

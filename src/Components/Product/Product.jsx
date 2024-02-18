import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import classes from "../Product/Product.module.css";
import Loader from "../Loader/Loader";
import axios from "axios";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [isloading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
        // console.log(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);
  return (
    <>
      {isloading ? (
        <Loader />
      ) : (
        <section className={classes.products__container}>
          {products?.map((singleProduct) => {
            return (
              <ProductCard
                key={singleProduct.id}
                product={singleProduct}
                renderAdd={true}
              />
            );
          })}
        </section>
      )}
    </>
  );
};

export default Product;

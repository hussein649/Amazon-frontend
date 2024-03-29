import React, { useEffect, useState } from "react";
import classes from "./Results.module.css";
import LayOut from "../../Components/LayOut/LayOut";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../Api/endPoints";
import ProductCard from "../../Components/Product/ProductCard";
import Loader from "../../Components/Loader/Loader";


const Results = () => {
  const [results, setResults] = useState([]);
  const [isloading, setIsLoading] = useState(false);
  const { categoryName } = useParams();
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => {
        setResults(res.data);
        setIsLoading(false);
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, [categoryName]);

  return (
    <LayOut>
      <section>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>Category/{categoryName}</p>
        <hr />
        {isloading ? (
          <Loader />
        ) : (
          <div className={classes.product__container}>
              {results?.map((product) => {
              return(  <ProductCard
                key={product.id}
                renderDesc={false}
                renderAdd={true}
                product={product}
              />)
  
            })}
          </div>
        )}
      </section>
    </LayOut>
  );
};

export default Results;

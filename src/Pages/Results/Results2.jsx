import React, { useEffect, useState } from "react";
import classes from "./Results.module.css";
import LayOut from "../../Components/LayOut/LayOut";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../Api/endPoints";
import ProductCard from "../../Components/Product/ProductCard";
import Loader from "../../Components/Loader/Loader";

function Results() {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // Declare and initialize isLoading
  const { categoryName } = useParams();
  useEffect(() => {
    setIsLoading(true); // Set isLoading to true before making the API request
    axios
      .get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => {
        console.log(res);
        setResults(res.data);
        setIsLoading(false); // Set isLoading to false after receiving the API response
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false); // Set isLoading to false in case of an error
      });
  }, [categoryName]); // Include categoryName as a dependency for the useEffect hook

  return (
    <LayOut>
      <section>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "38px" }}>Category / {categoryName}</p>
        <hr />
        {isLoading ? (
          <Loader />
        ) : (
          <div className={classes.products_container}>
            {results?.map((product) => {
              <ProductCard
                key={product.id}
                renderDesc={false}
                renderAdd={true}
                product={product}
              />;
              console.log(product)
            })}
          </div>
        )}
      </section>
    </LayOut>
  );
}

export default Results;

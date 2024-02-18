import React, { useEffect, useState } from "react";
import classes from "./ProductDetail.module.css";
import LayOut from "../../Components/LayOut/LayOut";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../Api/endPoints";
import ProductCard from "../../Components/Product/ProductCard";
import Loader from "../../Components/Loader/Loader";
axios;
function ProductDetail() {
  const { productId } = useParams();
  // console.log(productId)
  const [product, setProduct] = useState({});
  const [isloading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => {
        setProduct(res.data);
        // console.log(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);
  return (
    <LayOut>
      <div className={classes.product__container }>
        <section>
          {isloading ? (
            <Loader />
          ) : (
            <ProductCard
              product={product}
              flex={true}
              renderDesc={true}
              renderAdd={true}
            />
          )}
        </section>
      </div>
    </LayOut>
  );
}

export default ProductDetail;

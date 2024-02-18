import React, { useContext, useState } from "react";
import classes from "./Payment.module.css";
import LayOut from "../../Components/LayOut/LayOut";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import ProductCard from "../../Components/Product/ProductCard";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import CurrencyFormat from "../../Components/CurrencyFormat/CurrencyFormat";
import {axiosInstance} from "../../Api/axios"
import { ClipLoader } from "react-spinners";
import { db } from "../../Utility/firebase";
import { useNavigate } from "react-router-dom";
import { Type } from "../../Utility/action.type";



const Payment = (flex) => {
  const [{ user, basket },dispatch] = useContext(DataContext);
  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);
  const total = basket.reduce((amount, item) => {
    return item.price * item.amount + amount;
  }, 0);
  const stripe = useStripe();
  const elements = useElements();
  const  navigate = useNavigate()
  const [cardError, setCardError] = useState(null)
  const [processing, setProcessing] = useState(false)
  
  const handleChange = (e) => {
    // console.log(e)
   e?.error?.message? setCardError(e?.error?.message):setCardError("")
  }

  const handlePayment = async(e) => {
    e.preventDefault()
    try {
      setProcessing(true);
      //1.backend||functions--->contact to the client secret
      const response = await axiosInstance({
        method: "POST",
        url: `payment/create?total=${total * 100}`,
      });

      // console.log(response.data);
      const clientSecret = response.data?.clientSecret;
      // console.log(clientSecret)

      //2.client side (react side confirmation)
      const { paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });
      //3.after the confirmation --->order firestore databasesave,clear basket
      await db.collection("user").doc(user.uid).collection("orders").doc(paymentIntent.id).set({
        basket: basket,
        amount: paymentIntent.amount,
        created:paymentIntent.created
      })

      // empty the basket
      dispatch({type:Type.EMPTY_BASKET});

      // console.log(confirmation);
      setProcessing(false);

      navigate("/orders",{state:{msg:"you have placed new order"}})
    } catch (error) {
      console.log(error);
        setProcessing(false);
    }
}


  return (
    <LayOut>
      {/* Header */}
      <div className={classes.payment__header}>Checkout ({totalItem})items</div>
      {/* payment method */}
      <section className={classes.payment}>
        {/* address */}
        <div className={classes.flex}>
          <h3>Delivery Address</h3>
          <div>
            <div>{user?.email}</div>
            <div>123 React Lane</div>
            <div>New York City, NY</div>
          </div>
        </div>
        <hr />
        {/* product */}
        <div className={classes.flex}>
          <h3>Review items and delivery</h3>
          <div>
            {basket?.map((item) => (
              <ProductCard flex={true} key={item.id} product={item} />
            ))}
          </div>
        </div>
        <hr />
        {/* card form */}
        <div className={classes.flex}>
          <h3>Payment Method</h3>
          <div className={classes.payment__card__container}>
            <div className={classes.payment__details}>
              <form onSubmit={handlePayment}>
                {/* error */}
                {cardError && (
                  <small style={{ color: "red" }}>{cardError}</small>
                )}
                {/* card element */}
                <CardElement onChange={handleChange} />
                {/* price */}
                <div className={classes.payment__price}>
                  <div>
                    <span
                      style={{
                        display: "flex",
                        paddingTop: "15px",
                        gap: "10px",
                      }}
                    >
                      <p> Total order |</p> <CurrencyFormat amount={total} />
                    </span>
                  </div>
                  <button>
                    {processing ? (
                      <div className={classes.loading}>
                        <ClipLoader color="gray" size={12} />
                        <p>please wait</p>
                      </div>
                    ) : (
                      "Pay Now"
                    )}
                    Pay Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </LayOut>
  );
};

export default Payment;

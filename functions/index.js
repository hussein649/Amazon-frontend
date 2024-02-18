const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const stripe = require("stripe")(process.env.STRIPE_KEY);
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(cors({ origin: true }));
app.use(express.json());
app.get("/", (req, res) => {
  res.status(200).json({
    message: "success!",
  });
});

app.post("/payment/create", async (req, res) => {
 try {
   const total = parseInt(req.query.total);
   if (total > 0) {
     const paymentIntent = await stripe.paymentIntents.create({
       amount: parseInt(total),
       currency: "usd",
     });
     res.status(201).json({
       clientSecret: paymentIntent.client_secret,
     });
   } else {
     res.status(403).json({
       message: "total must be greater than 0",
     });
   }
 } catch (error) {
   res.status(500).json({
     message: "server error, please check your server",
   });
 }
});
exports.api = onRequest(app);
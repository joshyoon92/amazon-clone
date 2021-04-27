const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51Ijk3KBSUSF1tgjhCEDw0Tf4nQwHK6mmnbBp9DmyouAWxw8uoInrQnZq9zX9N5miqROc3uy8TOVnz0pM92ZWGZ6T00E1xoDT8F')

// - APP CONFIG
const app = express();

// - MIDDLEWARES
app.use(cors({ orgin: true }));
app.use(express.json());

// - API ROUTES
app.get('/', (request, response) => response.status(200).send('hello world'))

app.post('/payments/create' , async (request, response) => {
    const total = request.query.total;

    console.log('Payment Request Received BOOM!!! for this amoung >>> ', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

// - LISTEN COMMAND

exports.api = functions.https.onRequest(app)


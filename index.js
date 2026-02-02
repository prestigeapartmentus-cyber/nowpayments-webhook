const express = require("express");
const app = express();

app.use(express.json());

app.post("/webhooks/nowpayments", (req, res) => {
  console.log("NOWPayments webhook received:", req.body);
  res.status(200).send("OK");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Webhook server running");
});

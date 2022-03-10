const express = require("express");
const router = express.Router();
const { SendEmail } = require("../../controller/Controllers").EmailController;

router.post('/SendEmail', async function(req,res)  {
  const obj = req.body;
//  await SendEmail("nikitager29@gmail.com","Test email","lets try");
  res.status(200).send();
});
const express = require("express");
const { SendEmail } = require("../../controller/ControllersFolder/EmailController");
const router = express.Router();

router.post('/SendEmail', async function(req,res)  {
  await SendEmail("nikitager29@gmail.com","Test email","lets try");
  res.status(200).send();
});
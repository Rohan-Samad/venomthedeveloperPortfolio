const Email = require("./Email");
const express = require("express");
const router = express.Router();

router.post("/sendMail", async (req, res) => {
  try {
    console.log("IN the Email Functions");
    const { email, message } = req.body;
    console.log(email, message);
    if (!email || !message) {
      return res.status(200).json({
        status: "fail",
        message: "There should be email or message",
      });
    }
    const sendMail = await new Email(email).sendWelcomeMail();
    const sendMail2 = await new Email(email).sendMessage(message);
    // const sendMail = await new Email(email).sendWelcomeEmail();

    res.status(200).json({ status: "success" });
  } catch (error) {
    console.log(error);
    console.log("In the error backened");
    res
      .status(200)
      .json({
        status: "fail",
        message: "Sorry Something went wrong! try again after some time",
      });
  }
});

module.exports = router;

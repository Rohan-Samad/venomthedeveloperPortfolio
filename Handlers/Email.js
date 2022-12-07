const nodemailer = require("nodemailer");
const html2text = require("html-to-text");
const smtpTranport = require("nodemailer-smtp-transport");
const sgMail = require("@sendgrid/mail");
const pug = require("pug");
const htmlToText = require("html-to-text/lib/html-to-text");
sgMail.setApiKey(
  "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"
);
class Email {
  constructor(email) {
    this.email = email;
  }

  async sendWelcomeEmail() {
    await this.sendEmail(
      "venomthedeveloper@gmail.com",
      "qjdybyltmafbsdgk",
      "welcome",
      "Welcome to portfolio",
      "https://www.fiverr.com/share/Dgjxq7"
    );
  }
  async sendweMessage(message) {
    await this.sendEmail(
      "maidrgayi@gmail.com",
      "tgjpxzhjmjfvygpl",
      "message",
      "Message from the Customer",
      this.email,
      message
    );
  }

  async sendWelcomeMail() {
    const html = await pug.renderFile(`${__dirname}/./welcome.pug`, {
      name: "",
      url: "https://www.fiverr.com/share/Dgjxq7",
      subject: "Welcome to VenomTheDeveloper",
    });
    const msg = {
      to: this.email, // Change to your recipient
      from: "venomthedeveloper@gmail.com", // Change to your verified sender
      subject: "Welcome to VenomTheDeveloper", // Change to your
      html: html,
      // text:htmlToText(htms),
    };

    sgMail
      .send(msg)
      .then(() => {
        console.log("Email sent");
      })
      .catch((error) => {
        console.log("IN the First Error");
        console.error(error);
      });
  }
  async sendMessage(message) {
    const html = await pug.renderFile(`${__dirname}/./message.pug`, {
      name: "",
      url: this.email,
      subject: "Welcome to VenomTheDeveloper",
      message: message,
    });
    const msg = {
      to: "venomthedeveloperoffice@gmail.com", // Change to your recipient
      from: "venomthedeveloper@gmail.com", // Change to your verified sender
      subject: "Message from the Customer", // Change to your
      html: html,
      // text:htmlToText(htms),
    };

    sgMail
      .send(msg)
      .then(() => {
        console.log("Email sent");
      })
      .catch((error) => {
        console.log(
          "***********************************************************In the second Error***************************************************************************"
        );
        console.error(error);
      });
  }
}

module.exports = Email;

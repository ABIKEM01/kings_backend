const sgMail = require("@sendgrid/mail");

exports.contact = async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;

  // sgMail.setApiKey("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")
  sgMail.setApiKey(
    "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"
  );

  const msg = {
    to: "babayodea10@gmail.com",
    from: "babayodea10@gmail.com",
    subject: "KingsKid Hospital Support Center",
    text: `message from: name: ${name} \n email: ${email}  \n message:${message}`,
  };
  //Sending the Mail
  sgMail
    .send(msg)
    .then(() => {
      console.log("email sent successfully");
      res.status(200).json({
        status: "success",
      });
    })
    .catch((error) => {
      console.error(error);
      res.status(400).json({
        status: "failed",
      });
    });
};

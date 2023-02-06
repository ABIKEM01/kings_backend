import sgMail from "@sendgrid/mail";
import ContactUs from "./contactModel.js";

const Contact = async (req, res) => {
  try {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;
    const contact = await ContactUs.create({ name, email, message });

    // sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    // const msg = {
    //   to: contact,
    //   from: "babayodea10@gmail.com",
    //   subject: "Welcome to Artsmiley",
    //   text: `Welcome dear subscriber, this is artSmiley`,
    // };
    // sgMail
    //   .send(msg)
    //   .then(() => {
    //     console.log("EMAIL SENT SUCCESSFULLY");
    //     res.status(200).json({
    //       status: "success",
    //       contact: contact,
    //     });
    //   })
    res
      .status(200)
      .json({
        status: "success",
        contact: contact,
      })
  } catch (err) {
    res.status(201).json({
      status: "error",
      message: err.message,
    });
  }
};
const getContact = async (req, res) => {
  const { page = 1, limit = 10 } = req.query;

  try {
    const responses = await ContactUs.find()
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();

    const count = await ContactUs.countDocuments();
    res.json({
      responses,
      totalPages: Math.ceil(count / limit),
      currentPage: page,
    });
  } catch (err) {
    console.error(err.message);
  }
};

export { Contact, getContact };

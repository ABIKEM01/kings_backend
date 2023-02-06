import mongoose from "mongoose";

const ContactusSchema = new mongoose.Schema(
  {
    name: { type: String, required: [true, "name is required"] },
    email: { type: String, required: [true, "email is required"] },
    message: { type: String, required: [false, "message is required"] },
  },
  {
    timestamps: true,
  }
);

const ContactUs = mongoose.model("ContactUs", ContactusSchema);

export default ContactUs;

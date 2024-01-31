const Contact = require("../models/contact-model")
const ContactForm = async(req, res) =>{
    try {
      const response = req.body;
    //   console.log(response);
    await Contact.create(response);
    return res.status(200).json({msg:"Success"});
    } catch (error) {
      return res.status(400).json({msg:error})
    }
  };

  module.exports = ContactForm;
const express = require("express");
const router = express.Router();
const ContactForm = require("../contact-controller/contact-controller");

router.route("/contact").post(ContactForm);

module.exports = router;
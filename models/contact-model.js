const { Schema, model } = require("mongoose");

const contactSchema = new Schema({
    username: {
        type: String, // Valid type declaration
        required: true
    },
    email: {
        type: String, // Valid type declaration
        required: true
    },
    message: {
        type: String, // Valid type declaration
        required: true
    }
});

const Contact = model("Contact", contactSchema);

module.exports = Contact;

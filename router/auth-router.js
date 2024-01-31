const express = require("express");
const router = express.Router();
const authControllers = require("../auth-controllers/auth-controller");
const validate = require("../middleware/validate-middleware");
const {signupSchema, isLoginVal} = require("../validator/registration-validator");
const authMiddleware = require("../middleware/authMiddleware");

router.route("/").post(authControllers.home);
router.route("/register").post(validate(signupSchema), authControllers.register);
router.route("/login").post(validate(isLoginVal), authControllers.login);
router.route('/users').get(authMiddleware, authControllers.users)
module.exports = router;
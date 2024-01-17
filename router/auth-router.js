const express = require("express");
const router = express.Router();
const authControllers = require("../auth-controllers/auth-controller");

router.route("/").post(authControllers.home);

router.route("/register").post(authControllers.register);
router.route("/register").get(authControllers.register);
router.route("/login").post(authControllers.login);
router.route("/login").get(authControllers.login);
module.exports = router;
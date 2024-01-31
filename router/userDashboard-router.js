const express = require("express");
const router = express.Router();
const Userdash = require("../userDashboard-controller/user-dashboard-controller");
const authMiddleware = require("../middleware/authMiddleware");

router.route("/dashboard").get(authMiddleware, Userdash); //here authMiddleware helps to identify whether the token is set or not if the token is set then it will go the fn Userdash otherwise it will not

module.exports = router;
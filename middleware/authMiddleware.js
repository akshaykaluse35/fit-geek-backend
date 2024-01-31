const jwt = require('jsonwebtoken');
const User = require("../models/user-models")
const authMiddleware = async (req, res, next) => {
const token = req.header("Authorization");
  
    if (!token) {
      // If you attempt to use an expired token, you'll receive a "401 Unauthorized HTTP" response.
      return res
        .status(401)
        .json({ message: "Unauthorized HTTP, Token not provided" });
    }
  
    // Assuming token is in the format "Bearer <jwtToken>, Removing the "Bearer" prefix"
    const jwtToken = token.replace("Bearer", "").trim();
    // return res.status(200).json( {msg: jwtToken})
    try {
        const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);
        // console.log(isVerified);

        const fetchdata = await User.findOne({email: isVerified.email}).select({
            password: 0
        })
        console.log(fetchdata);

        req.users = fetchdata;
        req.id = fetchdata._id;
        

        next();
    } catch (error) {
        res.status(400).json({msg: `This is for jwt token error ${error}`})
    }
}

module.exports = authMiddleware;
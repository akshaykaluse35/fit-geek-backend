const User = require("../models/user-models")
const bcrypt = require("bcryptjs")
const home = async (req, res) => {
  try {
    res.status(200).json({ msg: "Hello this is home page" });
  } catch (error) {
    console.log(error);
  }
};

// *-------------------
// Registration Logic
// *-------------------
const register = async (req, res) => {
  try {
    
    // console.log(req.body);
    const {username, email, phone, password} = req.body;
    // console.log(req.body);
    const userExists = await User.findOne({email})

    if(userExists){
      return res.status(400).json({message:"email already exist"})
    }
      const saltRound = 10;
      const hashPass = await bcrypt.hash(password, saltRound)
      const newUser = await User.create({username, email, phone, password:hashPass});
      res.status(201).json({msg: "registration succesful", token: await newUser.generateToken(), userId:newUser._id.toString()});
    

    
  } catch (error) {
    console.error("Error in register function:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

//for login logic

const login = async(req, res) =>{
  try {

    const {email, password} = req.body;
    const userExists = await User.findOne({email})
    // console.log(userExists)
    if(!userExists){
      return res.status(400).json({message: "Invalid credentials"})
    }
    const isPassVal = await bcrypt.compare(password, userExists.password)

    if(isPassVal){
      return res.status(200).json({msg: "registration succesful", token: await userExists.generateToken(), userId:userExists._id.toString()});
    }else{
      return res.status(400).json({message: "inavalid username or password"});
    }

  } catch (error) {
    return res.status(400).json({msg: "this is login backend error"});
  }
}

const users = async(req, res) =>{
  try {
    const userData = req.users;
    // console.log(userData);
    return res.status(200).json({userData});
  } catch (error) {
    return res.status(400).json({msg: `"There is some issue in fetching user data from Database, we will let you know soon, thank you" ${error}`});
  }
}


module.exports = { home, register, login, users };
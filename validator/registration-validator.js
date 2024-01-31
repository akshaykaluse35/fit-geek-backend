const { z } = require("zod");

const signupSchema = z.object({
  username: z.string({ required_error: "Username is required" }).trim().min(3, { message: "Username should be at least 3 characters long" }).max(255, { message: "Username is too long" }),
  email: z.string({ required_error: "Email is required" }).trim().email({ message: "Invalid email address" }).min(3, { message: "Email should be at least 3 characters long" }).max(255, { message: "Email is too long" }),
  phone: z.string({ required_error: "Phone is required" }).trim().min(10, { message: "Phone should be at least 10 digits long" }).max(10, { message: "Phone is too long" }),
  password: z.string({ required_error: "Password is required" }).trim().min(4, { message: "Password should be at least 4 characters long" }).max(10, { message: "Password is too long" })
});

const isLoginVal = z.object({
  email: z.string({required_error: "Invalid Username or Password"}),
  password: z.string({required_error: "Invalid username or password"})
});


module.exports = {signupSchema, isLoginVal};

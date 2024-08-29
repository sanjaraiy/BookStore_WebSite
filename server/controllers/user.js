const User = require("../models/user");
const bcryptjs = require("bcryptjs");

async function signUp(req, res) {
    
  try {
    // step-1 get credentials from user
    const { fullName, email, password } = req.body;

    //step-2 check the user is exist or not
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: "User already exists" });
    }

    //step-3 if user is not exist then hashed the password
    const hashPassword = await bcryptjs.hash(password, 10);

    //step-4 create user entry
    const createdUser = new User({
      fullName: fullName,
      email: email,
      password: hashPassword,
    });

    //step-5 Save user entry in database
    await createdUser.save();
    return res.status(201).json({
      msg: "User created Successfully",
      user: {
        id_db: createdUser._id,
        fullName: createdUser.fullName,
        email: createdUser.email,
      },
    });
  } catch (error) {
    console.log("Error:", +error.message);
    return res.status(500).json({ msg: "Internal server error" });
  }
}

async function userLogin(req, res) {

  try {
    //step-1 get user credentials from user
    const { email, password } = req.body;

    //step-2 check user is exist or not
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(200).json({ msg: "User Not Registered" });
    }

    //step-3 user if exist then compare the password with hashed stored password
    const isMatch = await bcryptjs.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid username or password" });
    }

    //step-4 User is login successfully
    return res.status(200).json({
      msg: "Login successfully",
      user: {
        id_db: user._id,
        fullName: user.fullName,
        email: user.email,
      },
    });
  } catch (error) {
    console.log("error:", error);
  }
}

module.exports = {
  signUp,
  userLogin,
};

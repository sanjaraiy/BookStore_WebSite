const User = require('../models/user')
const bcryptjs = require('bcryptjs')

async function signUp(req,res){
    try {
        const {fullName,email,password} = req.body;
        const user = await User.findOne({email})
        if(user){
            return res.status(400).json({msg:"User already exists"})
        }
        
        const hashPassword = await bcryptjs.hash(password,10);

        const createdUser =  new User({
            fullName : fullName,
            email : email,
            password : hashPassword
        })
       await createdUser.save();
        return res.status(201).json({msg:"User created Successfully",user:{
            id_db:createdUser._id,
            fullName:createdUser.fullName,
            email:createdUser.email
        }})
      
    } catch (error) {
         console.log("Error:", + error.message);
         return res.status(500).json({msg:"Internal server error"})
    }
}

async function userLogin(req,res){
   
    const {email,password} = req.body;
    
    try {

        const user = await User.findOne({email});
        if(!user){
            return res.status(200).json({"msg":"User Not Registered"});
        }
    
        const isMatch = await bcryptjs.compare(password, user.password);
        if(!isMatch){
            return res.status(400).json({msg:"Invalid username or password"})
        }

        return res.status(200).json({msg:"Login successfully",user:{
            "id_db":user._id,
            fullName:user.fullName,
            email:user.email,
        }});
      
        
    } catch (error) {
        console.log("error:", error);
    }

}

module.exports ={
    signUp,
    userLogin,
}
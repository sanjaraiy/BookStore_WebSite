const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

const ConnectToMongoDB = require('./connection')

const bookRouter = require('./routes/book')
const userRouter = require('./routes/user')

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const URL = process.env.MONGODB_URL;


//=========Connect to mongoDB=========
ConnectToMongoDB(URL);


//===============Middleware===========
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(cors({
    origin : ["https://book-store-frontend-zeta.vercel.app"],
    credentials : true
}));


//========Define Routers=============
app.use('/book',bookRouter);
app.use('/user',userRouter);

app.use("/",(req,res)=>{
    res.json({msg : "Hello server is running on VERCEL"});
})

app.listen(PORT,()=>{
    console.log(`Server is running at port: ${PORT}`);
})
const mongoose = require('mongoose')

async function ConnectionToMongoDB(url){
    try {

         await mongoose.connect(url);
         
         console.log("Connected to mongoDB..!!");

    } catch (error) {
        console.log('Error:', error);
    }
   
}

module.exports = ConnectionToMongoDB;
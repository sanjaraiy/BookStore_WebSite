const Book = require('../models/book')

 async function handleGetBook(req,res){
   try {
        const book = await Book.find({})
        return res.status(200).json(book);
   } catch (error) {
        console.log("Error:",error);
        return res.status(500).json(error);
   }
}

module.exports = {
    handleGetBook,
}
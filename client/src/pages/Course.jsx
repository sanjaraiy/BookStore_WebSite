import React, { useEffect, useState } from 'react'
// import list from '../../public/list.json'
import Cards from '../components/Cards'
import { Link } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'

function Course() {
    
  const [book,setBook] = useState([])

  useEffect(()=>{
    const getBooks = async ()=>{
      try {
        const res =  await axios.get("https://book-store-backend-ashy.vercel.app/book")
        // console.log(res.data);
        setBook(res.data);
      } catch (error) {
        // console.log(error);
        toast.error("Error: ", error);
      }
    }
    getBooks();
  },[])


  return (
    <>
        <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
           <div className='pt-28 flex flex-col items-center gap-6 justify-center'>
              <h1 className='text-2xl text-center md:text-4xl'>We're delighted to have you <span className='text-pink-500'>Here! :) </span></h1>
              <p className='text-xl mt-1 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id porro soluta ipsam in aperiam dolorem eius laudantium nobis! Soluta debitis repudiandae natus? Eos voluptas velit, aliquam autem commodi accusamus magni!</p>
             <Link to="/">
                <button className="border py-2 px-3 text-white hover:bg-pink-700 duration-300 bg-pink-500 rounded-lg mt-1  ">Back</button>
             </Link>
           </div>
           <div className='mt-12 grid grid-col-1 md:grid-cols-4'>
             {book.map((item)=> <Cards key={item._id} item={item}></Cards>)}
            </div>
        </div>
    </>
  )
}

export default Course
import React, { useEffect, useState } from 'react'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios"
import toast from 'react-hot-toast'

// import list from '../../public/list.json'
import Cards from './Cards';

function Freebook() {  
    const [filterBook,setFilterBook] = useState([]);
    axios.defaults.withCredentials=true;
    useEffect((()=>{
        const getBooks = async() =>{
          try {
              const res = await axios.get('https://book-store-web-site.vercel.app/book');
              const data = res.data.filter((data)=>data.category === 'Free');
              // console.log(data);
              setFilterBook(data);
          } catch (error) {
             toast.error("Error: ",error);
            }
        }
      getBooks();
    }),[])
  
    // const filterData = list.filter((data)=>data.category === "Free")
    
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };


  return (
     <>
        <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
           <div>
             <h1 className='font-semibold text-xl pb-2'>Free Offered Cours</h1>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex vero, dolorum officia nesciunt nemo molestias?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, eveniet!</p>
           </div>
        
        <div className="slider-container mx-3">
      <Slider {...settings}>
         {filterBook.map((item)=> <Cards key={item._id} item={item}></Cards>)}
      </Slider>
     </div>
    </div>
     </>
  )
}

export default Freebook
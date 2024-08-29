import React, { useEffect, useState } from 'react';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import toast from 'react-hot-toast';

import Cards from './Cards';

function Freebook() {  
    const [filterBook, setFilterBook] = useState([]);
    axios.defaults.withCredentials = true;

    useEffect(() => {
        const getBooks = async () => {
            try {
                const res = await axios.get('http://localhost:4080/book');
                const data = res.data.filter((data) => data.category === 'Free');
                setFilterBook(data);
            } catch (error) {
                toast.error("Error fetching free books: ", error);
            }
        };
        getBooks();
    }, []);
  
    const settings = {
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
                    <h1 className='font-semibold text-xl pb-2'>Explore Our Free Books Collection</h1>
                    <p>
                        Discover a selection of free books across various genres, available for everyone. Whether you're looking to learn something new or simply enjoy a good read, our collection has something for you.
                    </p>
                </div>
            
                <div className="slider-container mx-3">
                    <Slider {...settings}>
                        {filterBook.map((item) => <Cards key={item._id} item={item}></Cards>)}
                    </Slider>
                </div>
            </div>
        </>
    );
}

export default Freebook;

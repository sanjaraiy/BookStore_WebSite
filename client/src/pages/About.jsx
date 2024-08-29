import React from 'react'

function About() {
  return (
    <>
      <div className='flex h-screen items-center jsutify-center flex-col mt-[50px]'>
         <div className=' w-[80%] mx-auto md:mt-[10%] my-auto flex flex-col gap-4 items-center justify-center text-center'>
            <h1 className='text-5xl'>About <span className='text-pink-500'>Us</span></h1>
            <p>At<span className='text-pink-500'> BookStore</span>, we believe in the magic of books. We're passionate about connecting readers with stories that inspire, educate, and entertain. Whether you're seeking the latest bestseller, a timeless classic, or a hidden gem, our curated selection has something for every reader. Join us in celebrating the joy of reading and the community it creates.</p>
         </div>
      </div>
    </>
  )
}

export default About
import React from 'react'

function Contact() {
  return (
    <>
      <div className='flex h-screen items-center jsutify-center flex-col mt-[60px] '>
       <div className=' my-auto flex flex-col gap-3 w-[400px]'>
       <h1 className='text-5xl  mb-2'>Contact Us</h1>
        <div>
            <span>Name</span><br />
           <input type="text" placeholder="Enter your name" className="input input-bordered w-full dark:text-slate-800 dark:bg-slate-300" />
        </div>
        <div>
            <span>Email</span><br />
            <input type="email" placeholder="Email address" className="input input-bordered w-full dark:text-slate-800 dark:bg-slate-300" />
        </div>
        <div>
        <span>Message</span><br />
        <textarea className="textarea textarea-ghost w-full border border-slate-200 dark:text-slate-800 dark:bg-slate-300" placeholder="Type your message"></textarea>
        </div>
       <div>
       <button className="bg-blue-500 rounded-md py-2 px-3 text-white">Submit</button>
       </div>
       </div>
      </div>
    </>
  )
}

export default Contact
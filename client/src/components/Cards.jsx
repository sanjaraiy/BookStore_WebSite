import React from "react";

function Cards({ item }) {
  
  return (
    <>
      <div className="mt-4 md:mb-10 dark:bg-slate-800 dark:text-black">
        <div className="card w-90  md:h-[100%]  mx-2 mb-5 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-800 dark:text-white dark:border">
          <figure>
            <img src={item.image} className="w-[250px] h-[240px] pt-6 md:w-[200px] md:h-[180px]" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">${item.price}</div>
              <div className=" cursor-pointer py-1 px-2 border border-slate-500 rounded-3xl hover:bg-pink-500 duration-200 hover:text-white ">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;

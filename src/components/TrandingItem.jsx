import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filmItem } from "../featurs/movie/filmeSlice";
import { Link } from "react-router-dom";
import movieImg from "../assets/poster/imgfox.webp"
const TrandingItem = ({film}) => {
  const  darkMode  = useSelector(state => state.movies.darkMode)
  const  { id , poster, title, rating, year, plot } = film;
  

  const dispatch = useDispatch();


  const getdata = (id) => {
    dispatch(filmItem(id))
  }

  
  return (
    <div className="mx-2">
      
       
        
        <div className={darkMode ? "rounded-md px-6 lg:px-0  bg-gray-300 border" : "rounded-md px-6 lg:px-0 bg-gray-100 border"}>

        <img
          src={movieImg}
          alt="Laptop"
          className=" w-full  rounded-md md:aspect-auto  h-[100%]"
        />
        <div className="p-4">
          <h1 className="inline-flex items-center text-lg font-semibold">
            {title}
          </h1>
          <p className="mt-3 text-sm text-gray-600">
           {plot}
          </p>

          <div className="mt-5 flex items-center space-x-2">
            <span className="block text-sm font-semibold">Rating : </span>
            <span className="block   p-1 px-2 text-xs font-medium">{rating}</span>
          </div>
          <div>
          <Link to={`/movieDetail/${id}`}>
              <button
                type="button"
                onClick={() => getdata(id)}
                className="mt-4  rounded-sm bg-red-500 px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
                Details
              </button>
            </Link>
            <button
              type="button"
              className="mt-4 mx-3 rounded-sm bg-red-500 px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
              Watch Now
            </button>
            <p className="text-xs my-2"><span className="font-bold">Release Date</span> : {year}</p>
          </div>
        </div>
      </div> 
      
      
    </div>
  );
};

export default TrandingItem;




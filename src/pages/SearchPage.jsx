import React from 'react'
import { useSelector } from 'react-redux'
import movieImg from "../assets/poster/imgfox.webp"

const SearchPage = () => {
   const { searchfilm } = useSelector((state)=> state.movies)
    const darkMode = useSelector(state => state.movies.darkMode)
    // const { title, genre, year, rating } = searchfilm;
  return (
    <div>
     {
        searchfilm?.map((film) => 
            <div className={darkMode ? 'bg-gray-700 p-5' : 'bg-gray-200 p-5'}>
          <div className={darkMode ? "rounded-md p-5 lg:h-[80vh] lg:w-full lg:flex  bg-gray-300 justify-around border-0" : "rounded-md p-5 bg-gray-100 lg:h-[80vh] lg:w-full lg:flex  justify-around border-0"}>
        <img
          src={movieImg}
          alt="Laptop"
          className="aspect-[16/9] w-[350px] rounded-md md:aspect-auto md:h-[100%] h-[100%]"
        />
        <div className="p-4">
          <h1 className="inline-flex items-center text-lg">
           <span className='font-bold'>Name : </span>{film.title}
          </h1>
         
          <p className="mt-3 text-sm text-gray-600">
        {film.plot}
          </p>
          <h1 className="inline-flex items-center text-lg my-4">
           <span className='font-bold'>Genre : </span> {film.genre}
          </h1>

          <div className=" flex items-center space-x-2">
            <span className="block text-lg font-semibold">Rating : </span>
            <span className="block   p-1 px-2 text-sm font-medium">{film.rating}</span>
          </div>
            <p className="text-xs my-4"><span className="font-bold">Release Date</span> : {film.year}</p>
          <div>
            {/* <button
              type="button"
              className="mt-4  rounded-sm bg-red-500 px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
              Details
            </button> */}
            <button
              type="button"
              className="mt-8 mx-3 w-full rounded-sm bg-red-500 px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
              Watch Now
            </button>
         
          </div>
        </div>
      </div>
    </div>
        )
     }
    </div>
  )
}

export default SearchPage
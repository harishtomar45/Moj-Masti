import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { filmItem, search } from '../featurs/movie/filmeSlice';
import movieImg from "../assets/poster/imgfox.webp"


const MovieDetails = () => {

  const { filmDetail, isLoading } = useSelector((state) => state.movies)
  const  darkMode  = useSelector(state => state.movies.darkMode)
   const dispatch = useDispatch();
  
   const { id } = useParams();

   useEffect(()=>{
dispatch(filmItem(id))
   },[])


   if(isLoading){
    return(
      <div className='flex align-middle  justify-center text-center'>
      <button class="py-2 px-4 flex justify-center align-middle items-center text-center">
  <svg width="20" height="20" fill="currentColor" class="mr-2 animate-spin" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
      <path d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z">
      </path>
  </svg>
  loading
</button>
</div>
    )
  }
  

  return (
    <div className={darkMode ? 'bg-gray-700 p-5' : 'bg-gray-200 p-5'}>
          <div className={darkMode ? "rounded-md p-5 lg:h-[80vh] lg:w-full lg:flex  bg-gray-300 justify-around border-0" : "rounded-md p-5 bg-gray-100 lg:h-[80vh] lg:w-full lg:flex  justify-around border-0"}>
        <img
          src={movieImg}
          alt="Laptop"
          className="aspect-[16/9] w-[350px] rounded-md md:aspect-auto md:h-[100%] lg:h-[100%]"
        />
        <div className="p-4">
          <h1 className="inline-flex items-center text-lg">
           <span className='font-bold'>Name : </span> { filmDetail?.title}
          </h1>
         
          <p className="mt-3 text-sm text-gray-600">
           {filmDetail.plot}
          </p>
          <h1 className="inline-flex items-center text-lg my-4">
           <span className='font-bold'>Genre : </span> { filmDetail?.genre}
          </h1>

          <div className=" flex items-center space-x-2">
            <span className="block text-lg font-semibold">Rating : </span>
            <span className="block   p-1 px-2 text-sm font-medium">{filmDetail?.rating}</span>
          </div>
            <p className="text-xs my-4"><span className="font-bold">Release Date</span> : {filmDetail.year}</p>
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

export default MovieDetails



























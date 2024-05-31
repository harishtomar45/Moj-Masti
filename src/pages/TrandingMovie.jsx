import React, { useEffect } from "react";
import TrandingItem from "../components/TrandingItem";
import { useDispatch, useSelector } from "react-redux";
import { movieItems } from "../featurs/movie/filmeSlice";

const TrandingMovie = () => {
  const { movie, isLoading } = useSelector((state) => state.movies);
  const darkMode = useSelector((state) => state.movies.darkMode);
  const dispatch = useDispatch();

  const trandingData = movie?.filter((ex) => ex?.rating >= 8.8);

  useEffect(() => {
    dispatch(movieItems());
  }, []);

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
    <div className={ darkMode ? "bg-gray-600 " : "bg-gray-200" }>
    <div className="p-5 text-center font-bold">
      <h1 className={darkMode ? "text-2xl lg:text-3xl text-gray-50"  : "text-2xl lg:text-3xl text-black"}>Tranding Movies</h1>
    </div>
      <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-7 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-3">
        {trandingData?.map((film) => (
          <TrandingItem key={film.id} film={film} />
        ))}
      </div>
    </div>
  );
};

export default TrandingMovie;

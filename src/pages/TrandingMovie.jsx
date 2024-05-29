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

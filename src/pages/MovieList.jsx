import React, { useEffect } from 'react'
import MovieItem from '../components/MovieItem'
import { useDispatch, useSelector } from 'react-redux';
import { movieItems } from '../featurs/movie/filmeSlice';

const MovieList = () => {

    const {movie, isLoading, searchState} = useSelector(state => state.movies)
    const darkMode = useSelector((state) => state.movies.darkMode);
    
    const dispatch = useDispatch();

    

    useEffect(()=>{
        dispatch(movieItems())
     },[])

  return (
    <div className={ darkMode ? "bg-gray-600 " : "bg-gray-200" }>
       <div className="p-3 text-center font-bold">
      <h1 className={darkMode ? "text-2xl lg:text-3xl text-gray-50"  : "text-2xl lg:text-3xl text-black"}>Explore the Moj-Masti and  enjoy <br /> you'r own time</h1>
    </div>
         <div className='mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-3'>
        {
            movie?.map((film) => <MovieItem key={film.id} film={film}/>)
        }
        </div>
    </div>
  )
}

export default MovieList;
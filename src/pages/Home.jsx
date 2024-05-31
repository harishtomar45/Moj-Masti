import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import background from "../assets/poster/background-poster.jpg";
import logo from "../assets/movie-logo.png";
import Navbar from "../components/Navbar";
import TrandingMovie from "../pages/TrandingMovie"
// import { useDispatch } from "react-redux";
import ThemMode from "../components/ThemMode";
// import { fatchMovie } from "../featurs/movie/filmeService";
// import { search } from "../featurs/movie/filmeSlice";

const Home = () => {


  // const [query, setQuery] = useState()
  // const dispatch = useDispatch();
  // const navigate = useNavigate()
  // // const { searchfilm } = useSelector((state) => state.moives);

  // const handleSearch = (e) => {
  //   e.preventDefault();
  //   dispatch(search(query))
  //   console.log(query)
  //   navigate("/search")
  //   setQuery("")
  // }
  return (
    <div className="backPoster relative">
      <div class="relative bg-gradient-to-r from-purple-600 to-blue-600 h-[380px] text-white overflow-hidden">
        <div class="absolute inset-0">
          <img
            className="imagePoster aspect-[3/2] object-cover bg-slate-700  lg:aspect-[2/1] lg:w-[100%] h-[420px] xl:aspect-[16/9]"
            src={background}
          />
          <div class="absolute inset-0 bg-slate-950 opacity-60"></div>
        </div>

        <div class="relative z-10 flex flex-col justify-center items-center h-full text-center">
          <h1 class="text-3xl flex-wrap text-center lg:text-5xl font-bold leading-tight mb-4 flex">
            Welcome to<img
              className="aspect-[1/0] object-cover lg:aspect-[2/1] w-[50px] lg:w-[100px] xl:aspect-[16/9]"
              src={logo}
              alt=""
            />Moje-Masti{" "}
           
          </h1>
          <p class="text-lg text-gray-300 mb-8">
            Discover amazing movie's and web-series that await you.
          </p>


          {/* <form className="mb-5" onSubmit={handleSearch} >
            <input className="rounded border-0 p-3 mx-3 text-black" type="text" placeholder="Search Movie" value={query} onChange={(e) => setQuery(e.target.value)} />
            <button type="submit" class="bg-red-500 text-gray-100 hover:bg-red-400 py-2 px-6 rounded text-lg font-semibold transition duration-300  hover:shadow-lg">search</button>
          </form> */}

        <Link to={"/trending"}>

          

        <a
            href="#"
            class="bg-red-500 text-gray-100 hover:bg-red-400 py-2 px-6 rounded text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
            Trending Movie's
          </a>
        </Link>
        </div>
      </div>

      
        {/* <Navbar /> */}
        <ThemMode/>
        <TrandingMovie/>
                
    </div>
  );
};

export default Home;

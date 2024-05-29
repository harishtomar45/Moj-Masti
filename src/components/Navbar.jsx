import React from 'react'
import logo from "../assets/movie-logo.png"
import { Link } from 'react-router-dom'
// import { useDispatch, useSelector } from 'react-redux'
// import { fatchMovie } from '../featurs/movie/filmeService'
// import { search } from '../featurs/movie/filmeSlice'
const Navbar = () => {
  


  return (
    <div className='absolute top-0 w-full z-10	'>
      {/* <!-- component --> */}
<header className="">
  <nav className="container mx-auto px-6 py-3">
    <div className="flex items-center justify-between">
      <div className="text-white font-bold text-xl">
        {/* <a href="#">Logo</a> */}
        <Link to={"/trending"}>
        <img className='aspect-[1/0] object-cover lg:aspect-[2/1] w-[50px] lg:w-[80px] xl:aspect-[16/9]' src={logo} alt="" />
        </Link>
      </div>
      
      <div className="hidden md:block">

        
        <ul className="flex items-center space-x-8">
          {/* <Link to={"/trending"}>
          <li><a href="#" className="text-white" >Home</a></li>
          </Link> */}
         <Link to={"/movies"}>
         <li><a href="#"  class="bg-red-500 text-gray-100 hover:bg-red-400 py-2 px-6 rounded text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">All Movie's</a></li>
         </Link>
        </ul>
      </div>
      <div className="md:hidden">
        <button className="outline-none mobile-menu-button">
          <svg className="w-6 h-6 text-white" x-show="!showMenu" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </div>
    <div className="mobile-menu hidden md:hidden">
      <ul className="mt-4 space-y-4">
        <li><a href="#" className="block px-4 py-2 text-white bg-gray-900 rounded">Home</a></li>
        <li><a href="#" className="block px-4 py-2 text-white bg-gray-900 rounded">About</a></li>
         </ul>
    </div>
    
  </nav>
</header>
    </div>
  )
}

export default Navbar


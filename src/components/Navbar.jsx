import React from "react";
import logo from "../assets/movie-logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="absolute top-0 w-full z-10	">
      {/* <!-- component --> */}
      <header className="">
        <nav className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="text-white font-bold text-xl">
              {/* <a href="#">Logo</a> */}
              <Link to={"/trending"}>
                <img
                  className="aspect-[1/0] object-cover lg:aspect-[2/1] w-[50px] lg:w-[80px] xl:aspect-[16/9]"
                  src={logo}
                  alt=""
                />
              </Link>
            </div>

            <div className=" md:block">
              <ul className="flex items-center space-x-8">
                {/* <Link to={"/trending"}>
          <li><a href="#" className="text-white" >Home</a></li>
          </Link> */}
                <Link to={"/movies"}>
                  <li>
                    <a
                      href="#"
                      class="bg-red-500  text-gray-100 hover:bg-red-400 py-2 lg:px-6 px-3 rounded lg:text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
                      All Movie's
                    </a>
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;

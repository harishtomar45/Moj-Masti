import React, { useState } from "react";
import logo from "../assets/movie-logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { search } from "../featurs/movie/filmeSlice";

const Navbar = () => {



  const [query, setQuery] = useState()
  const dispatch = useDispatch();
  const navigate = useNavigate()
  // const { searchfilm } = useSelector((state) => state.moives);

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(search(query))
    console.log(query)
    navigate("/search")
    setQuery("")
  }
  return (
    <div
      className=" top-0 w-full z-10	"
      style={{ backgroundColor: "transparent" }}>
      {/* <!-- component --> */}
      <header className="">
        <nav className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="text-white font-bold text-xl">
              {/* <a href="#">Logo</a> */}
              <Link to={"/"}>
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

                <form className="" onSubmit={handleSearch}>
                  <input
                    className="rounded border-0 p-2 mx-3 text-black"
                    type="text"
                    placeholder="Search Movie"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    required
                  />
                  <button 
                    type="submit"
                    className="bg-red-500 text-gray-100 hover:bg-red-400 py-2 px-2 rounded text-lg font-semibold transition duration-300  hover:shadow-lg">
                    search
                  </button>
                </form>
                <li>
                  <Link to={"movies"}>
                    <a
                      href="#"
                      className="bg-red-500  text-gray-100 hover:bg-red-400 py-2 lg:px-6 px-3 rounded lg:text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
                      All Movie's
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;

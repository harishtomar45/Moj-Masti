import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../featurs/movie/filmeSlice';

const ThemMode = () => {
    const dispatch = useDispatch();
    const darkMode = useSelector((state) => state.movies.darkMode);
  
    const customStyle = {
      height: "20px",
      width: "40px",
      textAlign: "center",
      // borderRadius: "50%",
      position: "fixed",
      right: "5px",
      top: "20px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "10px",
    };
  
    return (
      <div>
        <button   className={
            darkMode ? "bg-white text-black shadow" : "bg-black text-white shadow"
          }
           style={customStyle} onClick={() => dispatch(toggleTheme())}>
          {darkMode ? "Light" : "Dark"}
        </button>
  
        {/* <span
          className={
            darkMode ? "bg-light text-dark shadow" : "bg-dark text-light shadow"
          }
          style={customStyle}
          onClick={changeTheme}>
          {darkMode ? <FaSun /> : <FaMoon />}
        </span> */}
      </div>
    );
}

export default ThemMode
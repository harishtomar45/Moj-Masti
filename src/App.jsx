import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import TrandingMovie from './pages/TrandingMovie'
import MovieList from './pages/MovieList'
import MovieDetails from './pages/MovieDetails'
import Navbar from './components/Navbar'
import SearchPage from './pages/SearchPage'
// import { Router } from 'react-router-dom'

const App = () => {
  return (
    <div>
     <Router>
    <Home/>
      {/* <TrandingMovie/> */}
     <Routes>
      {/* <Route path='/' element={<Home/>} /> */}
      <Route path='/trending' element={<TrandingMovie/>} />
      <Route path='/movies' element={<MovieList/>} />
      <Route path='/movieDetail/:id' element={<MovieDetails/>} />
      <Route path='/search' element={<SearchPage/>} />


     </Routes>
     </Router>
     
    </div>
  )
}

export default App
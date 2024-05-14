import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { MovieList } from './components/MovieList/MovieList'
import Navbar from './components/Navbar'
// import { BrowserRouter as Router , Routers , Route  } from 'react-router-dom'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShowPage from './components/SearchPage/ShowPage'
import BookedShowsPage from './components/BookedShowPage'

function App() {
  

  const  [movies, setMovies]= useState([])
  const [searchVal, setSearchVal] = useState([])

const getMoviesRequest= async ()=>{
const url = "https://api.tvmaze.com/search/shows?q=spiderman"
const response = await fetch(url)
const responseJson = await response.json()
console.log(responseJson)

setMovies(responseJson)
}


useEffect(()=>{
  getMoviesRequest()
},[])

  return (
    <>
 <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<MovieList movies={movies} />} /> 
        <Route path="show/:id" element={<ShowPage/>} />
		<Route path="/booked" element={<BookedShowsPage/>} />
        <Route path="*" element={<h1>Error 404 X D</h1>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

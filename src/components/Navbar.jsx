import React from 'react'
import SearchBox from './SearchBox'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex  justify-between   m-4 text-2xl  text-center '>
        <Link to='/'>Movies</Link>
     
        <Link to="/booked" className="btn-modal border border-white rounded-xl p-3 text-center m-3">
        View Booked Shows
      </Link>
    </div>
  )
}

export default Navbar
import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='container'>
     <p className='logo'>SurvivialGuide</p>
     <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">FAQ</a></li>
        <li><button className='btn'><a href="/contact">Read More</a></button></li>
     </ul>
    </nav>
  )
}
export default Navbar
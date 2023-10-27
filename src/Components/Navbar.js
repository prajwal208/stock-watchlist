import React from 'react'
import logo from '../images/logo.png'
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <>
      <nav>
        <header>
            <img src={logo} alt='company-logo' className='logo'/>
            <h1>Trading brains</h1>     
        </header>    

        <ul>
            <Link to='/'>
            <li>Home</li>
            </Link>
            <Link to='/watchlist'>
            <li>Watchlist</li>
            </Link>
        </ul>
    </nav> 
    </>
  )
}

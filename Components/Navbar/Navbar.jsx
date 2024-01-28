import React from 'react'
import './Navbar.css'

import Cart from '../Assets/cart.png'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <p>Bliss</p>
        </div>
        <ul className="nav-menu">
            <li>Home</li>
            <li>About Us</li>
            <li>Products</li>
            <li>Review</li>
            <li>Contact Us</li>
        </ul>
        <div className="login"> {/* Corrected the attribute name to className */}
            <button>Login</button>
            <img className='imgcart' src={Cart} alt=""/>
        </div>
    </div>
  )
}

export default Navbar

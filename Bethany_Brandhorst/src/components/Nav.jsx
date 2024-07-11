import React from 'react'
import {Link} from 'react-router-dom'
import '../CSS/Nav.css'

const Nav = () => {
  return (
    < >
      <ul className='NavBar'>
        <li className='NavItem'>
            <Link className='NavLink' to='/'>Home</Link>
        </li>
        <li className='NavItem'>
            <Link className='NavLink'to='/resume'>Resume</Link>
        </li>
        <li className='NavItem'>
            <Link className='NavLink'to='/contact'>Contact</Link>
        </li>
        <li className='NavItem'>
            <Link className='NavLink'to='/projects'>Projects</Link>
        </li>
      </ul>
    </>
  )
}

export default Nav

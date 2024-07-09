import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className="header">
        <NavLink to="/" className="w-10 h-10 shadow-md bg-zinc-700 flex justify-center items-center rounded-md"> 
            <p className="text-blue-400 font-bold">H</p>
        </NavLink>
        <nav className="flex text-lg gap-7 font-medium">
            <NavLink to="/about" className={({isActive})=> isActive?'text-blue-400':'text-black'}>
                About
            </NavLink>
            <NavLink to="/projects" className={({isActive})=> isActive?'text-blue-400':'text-black'}>
                Projects
            </NavLink>
        </nav>
    </header>
  )
}

export default Navbar

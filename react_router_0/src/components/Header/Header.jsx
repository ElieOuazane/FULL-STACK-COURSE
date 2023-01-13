import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./Header.css"

export default function Header() {
   console.log("Header")
   return (
      <header className='app_header'>
         <nav>
            <NavLink to="/"> Home </NavLink>
            <NavLink to="/about"> About </NavLink>
            <NavLink to="/todos"> Todos </NavLink>
            <NavLink to="/users"> Users </NavLink>
         </nav>
      </header>
   )
}

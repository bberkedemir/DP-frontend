import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/mainlogo.png'
import nav_dropdown from '../Assets/nav_dropdown.png'
import profileLogo from '../Assets/user.png'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [menu,setMenu] = useState("shop");
    const menuRef = useRef();

    const dropdown_toggle = (e) => {
      menuRef.current.classList.toggle('nav-menu-visible');
      e.target.classList.toggle('open');
    }

  return (
    <div className='navbar'>
      <Link to='/' onClick={()=>{setMenu("shop")}} className="nav-logo">
        <img src={logo} alt="" />
        <p>Trendy Realm</p>
      </Link>
      <img onClick={dropdown_toggle} className='nav-dropdown' src={nav_dropdown} alt="" />
      <ul ref={menuRef} className="nav-menu">
        <li onClick={()=>{setMenu("shop")}}><Link to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("mens")}}><Link to='/mens'>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("womens")}}><Link to="womens">Women</Link>{menu==="womens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("kids")}}><Link to='/kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-profile">
        <Link to='/profile'><img src={profileLogo} alt="User Profile" /></Link>
      </div>
    </div>
  )
}

export default Navbar

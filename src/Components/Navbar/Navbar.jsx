import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/mainlogo.png'
import nav_dropdown from '../Assets/nav_dropdown.png'
import { Link } from 'react-router-dom'
import UserIcon from '../Assets/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png'

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const menuRef = useRef();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
  }

  return (
    <div className='navbar'>
      <Link to='/' onClick={() => { setMenu("shop") }} className="nav-logo">
        <img src={logo} alt="" />
        <p>BuyNow</p>
      </Link>
      <img onClick={dropdown_toggle} className='nav-dropdown' src={nav_dropdown} alt="" />
      <ul ref={menuRef} className="nav-menu">
        <li onClick={() => { setMenu("shop") }}><Link to='/'>Shop</Link>{menu === "shop" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("mens") }}><Link to='/mens'>Men</Link>{menu === "mens" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("womens") }}><Link to="womens">Women</Link>{menu === "womens" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("kids") }}><Link to='/kids'>Kids</Link>{menu === "kids" ? <hr /> : <></>}</li>
      </ul>
      <div className="nav-login">
        <Link to='/login'>
          <button>
            <img 
              src={UserIcon} // PNG dosyasını ekledik
              alt="UserIcon" // Alternatif metin
              style={{ width: '20px', height: '20px' }} // Boyutlandırma (isteğe bağlı)
            />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
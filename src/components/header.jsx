import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import flipkartLogo from '../assets/images/flipkart-plus_8d85f4.png';
import flipkatPlus from '../assets/images/plus_aef861.png';
import '../assets/css/header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass,faCartShopping,faAngleDown,faAngleUp} from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [angele,setAngle]= useState(faAngleDown)
  const handleMouseOver=()=>{
    setAngle(faAngleUp)
  }

  const handleMouseOver1=()=>{
    setAngle(faAngleDown)
  }

  return (
    <header className='bg-primary p-1 position-sticky-cus navbar navbar-expand-lg'>
      <div className='container-fluid d-flex align-items-center justify-content-between res-width'>
       <Link to='/'>
       <div>
          <img className='height-logo' src={flipkartLogo} alt="flipkartLogo" />
          <div className='size-dflex'>
            <span className='text-light'><i>Explore</i></span>
            <span className='text-warning'><i>Plus</i></span>
            <img className='height-plus' src={flipkatPlus} alt="flipkatPlus" />
          </div>
        </div>
       </Link>
        <div className='d-flex bg-white w-b-p'>
          <input className="cus-w-5 border-0 outline-none" type="text" placeholder='Search for products, brands and more'/>
          <div className='responsive-none'>
            <button className='bg-white border-0'><FontAwesomeIcon icon={faMagnifyingGlass } style={{color: "#0048f0",}} /></button>
          </div>
        </div>
        <div>
        <Link className='text-decoration-none' to="/main"><button className='bg-light no-border cus-login'>Login</button></Link>
        </div>
        <div>
          <a className='text-light text-decoration-none' href="https://gadda.22web.org">Become a Seller</a>
        </div>
        <div className='dropdown'>
          <div className='text-light text-decoration-none'   onMouseOver={handleMouseOver} onMouseLeave={handleMouseOver1}>More <FontAwesomeIcon icon= {angele} style={{color: "#ffffff",}} /></div>
          <div className='dropdown-content'>
            <Link to='/notification'>notification</Link>
            <Link to='/notification'>notification</Link>
          </div>
        </div>
        <div>
          <a className='text-light text-decoration-none' href="https://gadda.22web.org"> <FontAwesomeIcon icon={faCartShopping} style={{color: "#ffffff",}} />Cart</a>
        </div>
      </div>
    </header>
  );
}

export default Header;

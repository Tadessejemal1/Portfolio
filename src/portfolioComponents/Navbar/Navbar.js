import React from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineMenu } from 'react-icons/md'
import'./Navbar.css';

const Navbar = () => {
  const [toggleMenu,setToggleMenu] = React.useState(false);
  return (
    <div className='app__navbar'>
        <nav className='app__navbar'>
            <div className='app__navbar_left'>
                <h1>Portfolio</h1>
            </div>
            <ul className='app__navbar-link'>
                <li className='p_open'><a href='#home'>Home</a></li>
                <li className='p_open'><a href='#about'>About</a></li>
                <li className='p_open'><a href='#services'>Services</a></li>
                <li className='p_open'><a href='#portfolios'>Portfolios</a></li>
                <li className='p_open'><a href='#testmonials'>Testmonials</a></li>
                <li className='p_open'><a href='#contact'>Contact</a></li>
            </ul>
            <div className='app__navbar-smallscreen'>
              <GiHamburgerMenu color='#fff' className='small_screen' fontSize={27} onClick={() => setToggleMenu(true)} />
              {toggleMenu && (
                <div className='app__navbar-smallscren_overlay flex__center slide-bottom'>
                  <MdOutlineMenu color='#fff' className='overlay__close' fontSize={27} onClick={() => setToggleMenu(false)} />
                  <ul className='app__navbar-smallscreen-links'>
                    <li className='p_open'><a href='#home'>Home</a></li>
                    <li className='p_open'><a href='#about'>About</a></li>
                    <li className='p_open'><a href='#services'>Services</a></li>
                    <li className='p_open'><a href='#portfolios'>Portfolios</a></li>
                    <li className='p_open'><a href='#testmonial'>Testmonial</a></li>
                    <li className='p_open'><a href='#contact'>Contact</a></li>
                  </ul>
                </div>
              )}
            </div>
        </nav>
    </div>
  )
}

export default Navbar;
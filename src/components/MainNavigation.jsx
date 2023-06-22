import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../assets/logo.svg';
// import openMenuSvg from '../assets/open-menu.svg';
// import closeMenuSvg from '../assets/close-menu.svg';

const MainNavigation = () => {
   const [toggleNav, settoggleNav] = useState(false);

   const handleToggle = () => {
      settoggleNav(!toggleNav);
   };

   return (
      <header>
         <nav className={toggleNav ? 'navbar show-nav' : 'navbar'}>
            <div className='navbar__links'>
               <div
                  className={
                     toggleNav ? 'navbar__left show-nav' : 'navbar__left'
                  }
               >
                  <NavLink
                     className={({ isActive }) =>
                        isActive ? 'active navlink' : 'navlink'
                     }
                     end
                     to='/'
                     onClick={handleToggle}
                  >
                     Agency
                  </NavLink>
                  <NavLink
                     className={({ isActive }) =>
                        isActive ? 'active navlink' : 'navlink'
                     }
                     end
                     to='/whoarewe'
                     onClick={handleToggle}
                  >
                     Who are we ?
                  </NavLink>
                  <NavLink
                     className={({ isActive }) =>
                        isActive ? 'active navlink' : 'navlink'
                     }
                     end
                     to='/work'
                     onClick={handleToggle}
                  >
                     Work
                  </NavLink>
               </div>
               <div className='navbar__logo'>
                  <img
                     src={logo}
                     alt='round pink and purple degrader that blows bubbles containing an A in the shape of a triangle'
                  />
               </div>
               <div
                  className={
                     toggleNav ? 'navbar__right show-nav' : 'navbar__right'
                  }
               >
                  <NavLink
                     className={({ isActive }) =>
                        isActive ? 'active navlink' : 'navlink'
                     }
                     end
                     to='/team'
                     onClick={handleToggle}
                  >
                     Team
                  </NavLink>
                  <NavLink
                     className={({ isActive }) =>
                        isActive ? 'active navlink' : 'navlink'
                     }
                     end
                     to='/localisation'
                     onClick={handleToggle}
                  >
                     Localisation
                  </NavLink>
                  <NavLink
                     className={({ isActive }) =>
                        isActive ? 'active navlink' : 'navlink'
                     }
                     end
                     to='/contact'
                     onClick={handleToggle}
                  >
                     Contact
                  </NavLink>
               </div>
            </div>
            <button className='navbar__burger' onClick={handleToggle}>
               <span
                  className={toggleNav ? 'burger-bar show-nav' : 'burger-bar'}
               ></span>
               <h2>Menu</h2>
            </button>
         </nav>
         <div className='header-end'></div>
      </header>
   );
};

export default MainNavigation;

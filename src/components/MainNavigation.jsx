import { NavLink, Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import openMenuSvg from '../assets/open-menu.svg';
import closeMenuSvg from '../assets/close-menu.svg';
import { useState } from 'react';

/**
 *
 * @returns main navigation
 */

const MainNavigation = () => {
   const [toggleNav, settoggleNav] = useState(false);

   const handleToggle = () => {
      settoggleNav(!toggleNav);
   };

   return (
      <header className='header'>
         <div className='header__container'>
            <Link end to='/' onClick={handleToggle}>
               <div className='header__logo'>
                  <img src={logo} alt='agency logo' />
               </div>
            </Link>
            <nav className={toggleNav ? 'header__nav display' : 'header__nav '}>
               <div className='nav-left'>
                  <NavLink
                     className={({ isActive }) =>
                        isActive ? 'active link' : 'link'
                     }
                     end
                     to='/'
                     onClick={handleToggle}
                  >
                     Agency
                  </NavLink>
                  <NavLink
                     className={({ isActive }) =>
                        isActive ? 'active link' : 'link'
                     }
                     end
                     to='/whoarewe'
                     onClick={handleToggle}
                  >
                     Who are we ?
                  </NavLink>
                  <NavLink
                     className={({ isActive }) =>
                        isActive ? 'active link' : 'link'
                     }
                     end
                     to='/work'
                     onClick={handleToggle}
                  >
                     Work
                  </NavLink>
               </div>
               <div className='nav-right'>
                  <NavLink
                     className={({ isActive }) =>
                        isActive ? 'active link' : 'link'
                     }
                     end
                     to='/team'
                     onClick={handleToggle}
                  >
                     Team
                  </NavLink>
                  <NavLink
                     className={({ isActive }) =>
                        isActive ? 'active link' : 'link'
                     }
                     end
                     to='/localisation'
                     onClick={handleToggle}
                  >
                     Localisation
                  </NavLink>
                  <NavLink
                     className={({ isActive }) =>
                        isActive ? 'active link' : 'link'
                     }
                     end
                     to='/contact'
                     onClick={handleToggle}
                  >
                     Contact
                  </NavLink>
               </div>
            </nav>
            <div className='header__mobile'>
               {!toggleNav ? (
                  <img
                     src={openMenuSvg}
                     alt='open menu icon'
                     className='open-btn-menu'
                     onClick={handleToggle}
                  />
               ) : (
                  <img
                     src={closeMenuSvg}
                     alt='close menu icon'
                     className='close-btn-menu'
                     onClick={handleToggle}
                  />
               )}
               <h2>Menu</h2>
            </div>
         </div>
         <div className='header__div'></div>
      </header>
   );
};

export default MainNavigation;

import { useState } from 'react';
import { HiMenu } from 'react-icons/hi';
import style from './NavMobile.module.css';
import { NavLink } from 'react-router-dom';

const NavMobile = ({ randomSearch, handleLogOut }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={style.wrapper}>
      <HiMenu className={style.hamburger} onClick={toggleMenu} />
      <div className={`${style.menu} ${isMenuOpen ? style.open : ''}`}>
        <button className={style.button}>
          <NavLink to='/home' className={style.link}>
            Home
          </NavLink>
        </button>
        <button onClick={randomSearch} className={style.button}>
          <span className={style.link}>Lucky</span>
        </button>
        <button className={style.button}>
          <NavLink to='/about' className={style.link}>
            About
          </NavLink>
        </button>
        <button className={style.button}>
          <NavLink to='/favourites' className={style.link}>
            Favourites
          </NavLink>
        </button>
        <button onClick={handleLogOut} className={style.button}>
          <NavLink to='/' className={style.link}>
            Log Out
          </NavLink>
        </button>
      </div>
    </div>
  );
};

export default NavMobile;

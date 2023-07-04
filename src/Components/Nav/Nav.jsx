import SearchBar from '../SearchBar/SearchBar';
import { Link, NavLink } from 'react-router-dom';
import style from './Nav.module.css';
import NavMobile from './NavMobile/NavMobile';

const Nav = ({ onSearch, randomSearch, setAccess }) => {
  const handleLogOut = () => {
    setAccess(false);
  };

  return (
    <div className={style.wrapper}>
      <div className={style.logo}>
        <img
          src='https://www.pngplay.com/wp-content/uploads/14/Rick-And-Morty-Logo-Transparent-File.png'
          alt=''
          className={style.image}
        />
      </div>
      <SearchBar onSearch={onSearch} />
      <NavMobile
        randomSearch={randomSearch}
        handleLogOut={handleLogOut}
      ></NavMobile>
      <nav className={style.navContainer}>
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
      </nav>
    </div>
  );
};

export default Nav;

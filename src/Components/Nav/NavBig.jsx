import { Link, NavLink } from 'react-router-dom';

const NavBig = ({ onSearch, randomSearch, handleLogOut }) => {
  return (
    <div>
      <nav className={style.navContainer}>
        <SearchBar onSearch={onSearch} />
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

export default NavBig;

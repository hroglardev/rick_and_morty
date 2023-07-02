import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';

const Nav = ({ onSearch, randomSearch, setAccess }) => {
  const handleLogOut = () => {
    setAccess(false);
  };

  return (
    <nav>
      <SearchBar onSearch={onSearch} />
      <button onClick={randomSearch}>Add Random</button>
      <button>
        <Link to='/about'>About</Link>
      </button>
      <button>
        <Link to='/home'>Home</Link>
      </button>
      <button>
        <Link to='/favourites'>Favourites</Link>
      </button>
      <button onClick={handleLogOut}>Log Out</button>
    </nav>
  );
};

export default Nav;

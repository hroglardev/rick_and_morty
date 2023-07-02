import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';

const Nav = ({ onSearch, randomSearch }) => {
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
        <Link to='/'>Log Out</Link>
      </button>
    </nav>
  );
};

export default Nav;

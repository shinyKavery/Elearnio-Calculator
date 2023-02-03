import { useSelector } from 'react-redux';
import classes from './Header.module.css';

const Header = () => {
  const isAuthenticated = useSelector(state=>state.auth.isLoggedIn);
  
  return (
    <header className={classes.header}>
      <h1>Elearnio App</h1>
      {isAuthenticated && <nav>
        <ul>
          <li>
            <a href='/'>My Calculator</a>
          </li>
         
          <li>
            <button>Logout</button>
          </li>
        </ul>
      </nav>}
    </header>
  );
};

export default Header;

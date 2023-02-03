import classes from './Header.module.css';

const Header = () => {
  return (
    <header className={classes.header}>
      <h1>Elearnio App</h1>
      <nav>
        <ul>
          <li>
            <a href='/'>My Calculator</a>
          </li>
         
          <li>
            <button>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

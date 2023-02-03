import classes from './Header.module.css';

const Header = () => {
  const loginHandler = ()=>{
    
  }
  return (
    <header className={classes.header}>
      <h1>Elearnio App</h1>
      <nav>
        <ul>
          <li>
            <a href='/'>My Calculator</a>
          </li>
         
          <li>
            <button onClick={loginHandler}>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

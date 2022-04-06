import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav className="teal darken-3">
        <div className="nav-wrapper container">
          <Link to="/" className="brand-logo">Reciepes</Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contacts">Contacts</NavLink></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export {Header};

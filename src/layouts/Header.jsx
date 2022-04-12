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
            <a className="grey-text text-lighten-4 right" target="_blank" rel="noreferrer" href="https://github.com/oxymc/react-food">Github</a>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export {Header};

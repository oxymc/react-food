import { NavLink, Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="page-footer teal darken-3">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">Footer Content</h5>
            <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="white-text">Links</h5>
            <ul>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/contacts">Contacts</NavLink></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
        © {new Date().getFullYear()} OXYG
        <Link className="grey-text text-lighten-4 right" to="#!">My Github</Link>
        </div>
      </div>
    </footer>
  );
}

export {Footer};

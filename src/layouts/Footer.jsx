import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="page-footer teal darken-3">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text"><NavLink to="/" className="grey-text text-lighten-4">Reciepes</NavLink></h5>
            <p className="grey-text text-lighten-4">
              The project is built on routes and hooks
            </p>
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="white-text">Links</h5>
            <ul>
              <li><NavLink to="/about" className="grey-text text-lighten-4">About</NavLink></li>
              <li><NavLink to="/contacts" className="grey-text text-lighten-4">Contacts</NavLink></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container row">
          <div className='col s12 center'>
            © {new Date().getFullYear()} OXYG
            <a className="grey-text text-lighten-4" target="_blank" rel="noreferrer" href="https://github.com/oxymc/react-food">My Github</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export {Footer};

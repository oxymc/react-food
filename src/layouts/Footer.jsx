import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="page-footer teal darken-3">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text"><NavLink to="/">Reciepes</NavLink></h5>
            <p className="grey-text text-lighten-4">
              Project was used React Routers and hooks
            </p>
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
        <div className="container row">
          <div className='col s12 center'>
            © {new Date().getFullYear()} OXYG
            <a className="grey-text text-lighten-4" target="_blank" rel="noreferrer" href="https://oxymc.github.io/react-food/">My Github</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export {Footer};

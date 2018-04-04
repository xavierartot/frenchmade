import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  render() {
    return (
      <div className="site-header sticky-top py-1">
        <div className="container d-flex flex-column flex-md-row justify-content-center">
          <h3 className="py-2 d-none d-md-inline-block text-danger">
            {' '}
            <Link to="/Party" className="nav-link">
              10% off on the Party 🔥
            </Link>
          </h3>
        </div>
      </div>
    );
  }
}
export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  render() {
    return (
      <div className="site-header sticky-top py-1">
        <div className="container d-flex flex-column flex-md-row justify-content-center">
          <p className="py-2 d-none d-md-inline-block text-alert"> 10% off on the Party</p>
        </div>
      </div>
    );
  }
}
export default Navbar;

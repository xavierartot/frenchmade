import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { Link } from 'react-router-dom';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    return (
      <div>
        <Navbar color="faded" light expand="md">
          <NavbarBrand href="/home">🌜 French Made 🌛</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to="/event" className="nav-link">
                  event
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/party" className="nav-link">
                  party
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/catering" className="nav-link">
                  catering
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/dinner" className="nav-link">
                  dinner
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/about" className="nav-link">
                  about
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/contact" className="nav-link">
                  contact
                </Link>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Apps
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Log In</DropdownItem>
                  <DropdownItem>Sign Up</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Try Our App</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

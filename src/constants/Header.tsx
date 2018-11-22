import React, {Component} from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import NavForm from './NavForm';

class Header extends Component {
    render() {
        return (
            <header className="sticky">
                <Navbar collapseOnSelect fixedTop className="main-nav">
                    <Navbar.Header>
                        <Navbar.Brand>
                            <i className="material-icons nav-icon">code</i>
                        </Navbar.Brand>
                        <Navbar.Brand>
                            <a href="">React-Router</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav bsStyle="pills">
                            <LinkContainer exact to="/">
                                <NavItem>Home</NavItem>
                            </LinkContainer>
                            <LinkContainer exact to="/about">
                                <NavItem>About</NavItem>
                            </LinkContainer>
                            <LinkContainer exact to="/teachers">
                                <NavItem>Teachers</NavItem>
                            </LinkContainer>
                            <NavDropdown eventKey={4} title="Courses" id="courses-dropdown"  >
                                <LinkContainer exact to="/courses/html">
                                    <NavItem>HTML</NavItem>
                                </LinkContainer>
                                <LinkContainer exact to="/courses/css">
                                    <NavItem>CSS</NavItem>
                                </LinkContainer>
                                <LinkContainer exact to="/courses/js">
                                    <NavItem>Javascript</NavItem>
                                </LinkContainer>
                                <MenuItem divider />
                                <NavItem href="https://teamtreehouse.com/library" target="_blank">Treehouse Library</NavItem>
                            </NavDropdown>
                        </Nav>
                        <NavForm/>
                    </Navbar.Collapse>
                </Navbar>;
            </header>
        )
    }
}


/* <span className="icn-logo"><i className="material-icons">code</i></span>
        <ul className="main-nav">
            <li><NavLink exact to="/" activeStyle={activeStyles.home}>Home</NavLink></li>
            <li><NavLink to="/about" activeStyle={activeStyles.about}>About</NavLink></li>
            <li><NavLink to="/teachers" activeStyle={activeStyles.teachers}>Teachers</NavLink></li>
            <li><NavLink to="/courses" activeStyle={activeStyles.courses}>Courses</NavLink></li>
        </ul> */
export default Header;
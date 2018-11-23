import * as React from 'react';
import { MenuItem , Nav, Navbar, NavDropdown, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import NavForm from './NavForm';

import { treehouselink } from "../reducers/reducer-header";

export default class Header extends React.Component {
    public render() {
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
                                <NavItem href={treehouselink} target="_blank">Treehouse Library</NavItem>
                            </NavDropdown>
                        </Nav>
                        <NavForm/>
                    </Navbar.Collapse>
                </Navbar>;
            </header>
        )
    }
}

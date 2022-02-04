import React, { Component } from 'react';
import { Nav, NavbarToggler, Collapse, NavItem, Navbar, NavbarBrand, Jumbotron, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false
        }

        this.toggleNav = this.toggleNav.bind(this)
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }


    render() {
        return (
            <Navbar sticky="top" className="navbar bg-dark" expand="md">
                <div className="container">
                    <NavbarBrand className="mr-auto" href="/"><img src="/assets/images/logo.jpg" height="100" width="200" alt="nucamp Logo" /></NavbarBrand>
                    <NavbarToggler onClick={this.toggleNav} />
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                    <Nav>
                        <NavItem>
                            <NavLink className="nav-link" to="/home">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/gallery">Gallery</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/reserve">Reserve</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/blog">Blog</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/blog">Contact</NavLink>
                        </NavItem>
                    </Nav>
                    </Collapse>
                </div>
            </Navbar>
        )
    }
}

export default Header;
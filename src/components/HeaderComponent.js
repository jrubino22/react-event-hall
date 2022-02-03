import React, { Component } from 'react';
import { Nav, NavbarToggler, Collapse, NavItem, Navbar, NavbarBrand, Jumbotron, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label } from 'reactstrap';
import {NavLink} from 'react-router-dom';

class Header extends Component {

    render() {
        return(
            <Navbar className="static-top navbar">
                <NavbarBrand className="mr-auto"><img src="/assets/images/logo.jpg" /></NavbarBrand>

            </Navbar>
        )
    }
}

export default Header
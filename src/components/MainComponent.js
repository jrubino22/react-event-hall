import React, { Component } from 'react';
import Header from './HeaderComponent';
import { Navbar, NavbarBrand } from 'reactstrap';
import { Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Main extends Component {


    render() {
        return (
            <div>
                <Header />
            </div>
        );
    }
}

export default Main;
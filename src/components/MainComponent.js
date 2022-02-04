import React, { Component } from 'react';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import { Navbar, NavbarBrand } from 'reactstrap';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';


class Main extends Component {


    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={ Home }/>
                    <Redirect to='/home' />
                </Switch>

            </div>
        );
    }
}

export default Main;
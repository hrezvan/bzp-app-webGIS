import React, { Component } from 'react';
import Navbar from '../components/navbar/navBar';
import EnterBtn from '../components/enterbtn/enterBtn';
import License from '../components/license/license';
import NormalLoginForm from '../components/loginForm/loginForm';
import RegistrationForm from '../components/registerForm/registerForm';

class Homepage extends Component {
    render() { 
        return ( 
            <div id='page_container'>
                <Navbar />
                {/* <EnterBtn /> */}
                <NormalLoginForm />
                <License />
            </div>
            
        );
    }
}
 
export default Homepage;
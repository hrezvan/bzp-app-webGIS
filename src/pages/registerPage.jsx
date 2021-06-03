import React, { Component } from 'react';
import Navbar from '../components/navbar/navBar';
import RegistrationForm from '../components/registerForm/registerForm';
import License from '../components/license/license';

class registerPage extends Component {
    state = {  }
    render() { 
        return ( 
            <div id='page_container'>
                <Navbar />
                <RegistrationForm />
                <License />
            </div>
        );
    }
}
 
export default registerPage;
import React, { Component } from 'react';
import Navbar from '../components/navbar/navBar';
import EnterBtn from '../components/enterbtn/enterBtn';
import License from '../components/license/license';

class Homepage extends Component {
    render() { 
        return ( 
            <div id='page_container'>
                <Navbar />
                <EnterBtn />
                <License />
            </div>
            
        );
    }
}
 
export default Homepage;
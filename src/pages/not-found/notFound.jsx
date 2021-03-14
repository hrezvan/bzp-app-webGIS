import React, { Component } from 'react';
import License from '../../components/license/license';
import Navbar from '../../components/navbar/navBar';
import './notFound.scss';

class NotFound extends Component {
    render() { 
        return (
            <div id='page_container'>
                <Navbar />
                <h1 id='not_found'>Page Not Found</h1>
                <License />
            </div> 
        );
    }
}
 
export default NotFound;
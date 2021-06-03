import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './enterBtn.scss';

const EnterBtn = () => {

    return ( 
        <Route render={({ history}) => (
            <div className='position-absolute mid-center'>
                <button
                type='button'
                className='btn btn-primary'
                id='enter'
                onClick={() => { history.push('/map') }}
                >
                Login
                </button>
            </div>
        )} />
     );
}
 
export default EnterBtn;

// className="btn btn-primary"
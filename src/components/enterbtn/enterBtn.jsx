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
                onClick={() => { history.push('/map') }}
                >
                برو به نقشه
                </button>
            </div>
        )} />
     );
}
 
export default EnterBtn;

// className="btn btn-primary"
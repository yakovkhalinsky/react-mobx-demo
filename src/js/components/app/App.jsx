import React from 'react';

import Register from '../register/Register';
import Identity from '../identity/Identity';

export default (props) => {
    let { user } = props.store;
    let { identity } = user;

    return (
        <div className="container">
            <h1>My App</h1>
            <Register user={user}/>
            <Identity identity={identity}/>
        </div>
    )
};

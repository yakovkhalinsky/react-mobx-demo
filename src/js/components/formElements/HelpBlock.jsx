import React from 'react';

export default (props) => {
    return props.message ? <div className="help-block">{props.message}</div> : null;
}

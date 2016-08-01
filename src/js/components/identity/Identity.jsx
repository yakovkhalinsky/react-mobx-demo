import React from 'react';
import { observer } from 'mobx-react'

@observer
export default class extends React.Component {
    render() {
        let { username, fullName, email } = this.props.identity;

        if (username && fullName && email) {
            return (
                <div className="panel panel-info">
                    <div className="panel-heading">Identity</div>
                    <div className="panel-body">
                        <div className="row">
                            <div className="col-xs-2"><strong>Username</strong></div>
                            <div className="col-xs-10 identity-values">{username}</div>
                        </div>
                        <div className="row">
                            <div className="col-xs-2"><strong>Full Name</strong></div>
                            <div className="col-xs-10 identity-values">{fullName}</div>
                        </div>
                        <div className="row">
                            <div className="col-xs-2"><strong>Email</strong></div>
                            <div className="col-xs-10 identity-values">{email}</div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="panel panel-default">
                    <div className="panel-body">
                        No identity is set
                    </div>
                </div>
            )
        }
    }
}

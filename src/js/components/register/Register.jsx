import React from 'react';

import HelpBlock from '../formElements/HelpBlock';

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.errors = {};
        this.hasErrors = false;
        this.submitted = false;
        this.user = props.user;
    }

    componentDidMount() {
        this.refs.username.focus();
    }

    render() {
        let handleSubmit = this.handleSubmit.bind(this);
        let doValidation = this.doValidation.bind(this, false); // don't focus on field update
        let { errors, hasErrors } = this;
        let hasSuccess = this.submitted && !hasErrors;

        let getClass = (field) => {
            return `form-group ${errors[field] ? ' has-error' : ''}`;
        };

        return (
            <div className="panel">
                {Object.keys(errors).forEach(err => <p>{err}</p>)}
                <form>
                    <legend>Register as a new user</legend>
                    {hasErrors ? <div className="alert alert-danger"><strong>Please check fields are completed</strong></div> : null}
                    {hasSuccess ? <div className="alert alert-success"><strong>Form details are all good!</strong></div> : null}
                    <div className={getClass('username')}>
                        <label>Username</label>
                        <input className="form-control" ref="username" type="text" placeholder="choose your username" onChange={doValidation}/>
                        <HelpBlock message={errors.username}/>
                    </div>
                    <div className={getClass('fullName')}>
                        <label>Full Name</label>
                        <input className="form-control" ref="fullName" type="text" placeholder="your full name" onChange={doValidation}/>
                        <HelpBlock message={errors.fullName}/>
                    </div>
                    <div className={getClass('email')}>
                        <label>Email</label>
                        <input className="form-control" ref="email" type="email" placeholder="enter your email" onChange={doValidation}/>
                        <HelpBlock message={errors.email}/>
                    </div>
                    <div className={getClass('password')}>
                        <label>Choose Password</label>
                        <input className="form-control" ref="password" type="password" placeholder="choose your password" onChange={doValidation}/>
                        <HelpBlock message={errors.password}/>
                    </div>
                    <div className={getClass('passwordConfirm')}>
                        <label>Confirm Password</label>
                        <input className="form-control" ref="passwordConfirm" type="password" placeholder="confirm your password" onChange={doValidation}/>
                        <HelpBlock message={errors.passwordConfirm}/>
                    </div>
                    <button type="button" className="btn btn-block btn-primary" onClick={handleSubmit}>Register User</button>
                </form>
            </div>
        )
    }

    handleSubmit() {
        this.submitted = true;
        this.doValidation();
        if (!this.hasErrors) {
            this.doUpdate()
        }
    }

    doValidation(focus = true) {
        if (!this.submitted) {
            return;
        }

        let { password, passwordConfirm } = this.refs;

        this.errors = {};

        Object.keys(this.refs).forEach(field => {
            if (!this.refs[field].value) {
                this.errors[field] = `${field} is required`;
            }
        });

        if (password.value && password.value !== passwordConfirm.value) {
            this.errors.passwordConfirm = 'Passwords do no match';
        } else if (!passwordConfirm.value) {
            this.errors.passwordConfirm = 'Confirm your password';
        }

        this.setState({});

        this.hasErrors = Object.keys(this.errors).length;

        if (this.hasErrors && focus) {
            this.refs.username.focus();
        }
    }

    doUpdate() {
        let { username, fullName, email } = this.refs;
        let identity = {
            username: username.value,
            fullName: fullName.value,
            email: email.value
        };
        console.log('doUpdated', identity);
        this.user.setIdentity(identity);
    }
}

import { observable, action } from 'mobx';

class User {
    @observable
    identity = {
        username: '',
        fullName: '',
        email: ''
    };

    @action
    setIdentity({username, fullName, email}) {
        console.log('setIdentity', {username, fullName, email});
        this.identity.username = username;
        this.identity.fullName = fullName;
        this.identity.email = email;
    }
}

export default new User();

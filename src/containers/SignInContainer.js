import React, {Component} from 'react';
import SignIn from '../components/SignIn';
import {login} from '../utils/AuthHelpers';

class SignInContainer extends Component {
    state = {
        email: '',
        password: '',
        uid: '',
        isLoggedIn: false
    }

    handleSignIn = (e) => {
        e.preventDefault();
        login(this.state.email, this.state.password, (user) => {
            console.log('logging user', user);
            this.setState({
                uid: user.uid,
                isLoggedIn: true
            })
        });
    }

    handleInputChange = (e) => {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <SignIn
                email={this.state.email}
                password={this.state.password}
                onHandleSignIn={this.handleSignIn}
                onInputChange={this.handleInputChange}/>
        )
    }
}

export default SignInContainer;
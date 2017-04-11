import React from 'react';
import SignUp from '../components/SignUp';
import { auth, getCurrentUser } from '../utils/AuthHelpers';
import { ref } from '../config/constants';


class SignUpContainer extends React.Component {

    componentDidMount() {
        console.log(`Component did mount`);
    }
    updateUser = (uid, first, last, username) => {

        console.log(`the uid is: ${uid}`);
        ref.child(`/users/${uid}/info`)
            .update({
                first: first,
                last: last,
                username: username
            });
    }
    createUser = (userInfo) => {
        console.log(`createUser invoked...`);

        auth(userInfo.email, userInfo.password)
            .then((user) => {
                this.updateUser(user.uid, userInfo.first, userInfo.last, userInfo.username)
            });
    }
    render() {
        return (
            <SignUp
                onCreateUser={this.createUser}
            />
        )
    }
};

export default SignUpContainer;

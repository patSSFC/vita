import React from 'react';
import SignUp from '../components/SignUp';
import { auth, getCurrentUser } from '../utils/AuthHelpers';
import { ref } from '../config/constants';


class SignUpContainer extends React.Component {
  state = {
    shouldRedirect: false
  }
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
            this.setState({shouldRedirect: true})
        });
  }
  render() {
    if (this.state.shouldRedirect) {
      return (
         <Redirect to="/onboard" />
      )
    } else {
      return (
          <SignUp
              onCreateUser={this.createUser}
          />
      )
    }
  }
};

export default SignUpContainer;

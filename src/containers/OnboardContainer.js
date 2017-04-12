import React from 'react';
import {Redirect} from 'react-router-dom';

// components
import OnboardNav from '../components/onboarding/nav';

// authentication
import { getCurrentUser } from '../utils/AuthHelpers';
import { ref } from '../config/constants';

class OnboardContainer extends React.Component {
  static defaultProps = {
    initialStep: 'skillsContainer'
  }
  state = {
    steps: [
      {id: 1, name: 'skillsContainer', isCompleted: false},
      {id: 2, name: 'projectsContainer', isCompleted: false},
      {id: 3, name: 'aboutContainer', isCompleted: false}
    ],
    loggedUser: false
  }
  componentWillMount() {
    const user = getCurrentUser();
    if (user) {
      this.setState({loggedUser: true})
    } else {
      <Redirect to="/" />
    }
  }
  render() {
    return (
      <div>
        <OnboardNav />
        <div className="onboard-body">
          <h2>In the Onboard Container!</h2>
        </div>
      </div>
    )
  }
};

export default OnboardContainer;

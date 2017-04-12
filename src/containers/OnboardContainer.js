import React from 'react';

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
    ]
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

import React from 'react';

// components
import OnboardNav from '../components/onboarding/nav';

// authentication
import { getCurrentUser } from '../utils/AuthHelpers';
import { ref } from '../config/constants';

class OnboardContainer extends React.Component {
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

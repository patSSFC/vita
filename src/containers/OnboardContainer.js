import React from 'react';
import {Redirect, Route} from 'react-router-dom';

// components
import OnboardNav from '../components/onboarding/nav';

// authentication
import { getCurrentUser } from '../utils/AuthHelpers';
import { ref } from '../config/constants';

const Skills = () => {
  // /skills
  return (
    <div>
      <h3>Skills container</h3>
      <button>Click here to go to next step</button>
    </div>
  )
};

const Projects = () => {
  return (
    // projects
    <div>
      <h3>Projects container</h3>
      <button>Click here to go to next step</button>
    </div>
  )
};

const About = () => {
  return (
    //about
    <div>
      <h3>About container</h3>
      <button>All done!</button>
    </div>
  )
};


class OnboardContainer extends React.Component {
  state = {
    steps: [
      {id: 1, name: 'skillStep', isCompleted: false},
      {id: 2, name: 'projectStep', isCompleted: false},
      {id: 3, name: 'aboutStep', isCompleted: false}
    ],
    currentStep: 'skillStep',
    isLoggedIn: false
  }
  componentWillMount() {
    const user = getCurrentUser();
    console.log(user);
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
<<<<<<< HEAD
          <Skills />
=======

>>>>>>> 35c4e59a2881f037f63c57c036fb2eebba790e1b
        </div>
      </div>
    )
  }
};

export default OnboardContainer;

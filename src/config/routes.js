import React from 'react';

// setting up React Router
import {BrowserRouter, Route} from 'react-router-dom';

// declaring components
import Main from '../components/Main';
import SignUpContainer from '../containers/SignUpContainer';
import SignInContainer from '../containers/SignInContainer';
import OnboardContainer from '../containers/OnboardContainer';
import SkillsContainer from '../containers/SkillsContainer';

const routes = (
    <BrowserRouter>
        <div>
            <Route exact path='/' component={Main} />
            <Route path='/signup' component={SignUpContainer} />
            <Route path='/signin' component={SignInContainer} />
            <Route path='/onboard' component={OnboardContainer} />
        </div>
    </BrowserRouter>

);

export default routes;

import React from 'react';

// setting up React Router
import {BrowserRouter, Route} from 'react-router-dom';

// declaring components
import Main from '../components/Main';
import SignUpContainer from '../containers/SignUpContainer';
import OnboardContainer from '../containers/OnboardContainer';

const routes = (
  <BrowserRouter>
      <div>
          <Route exact path='/' component={Main} />
          <Route path='/signup' component={SignUpContainer} />
          <Route path='/onboard' component={OnboardContainer} />
      </div>
  </BrowserRouter>
);

export default routes;

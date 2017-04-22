import React from 'react';

// setting up React Router
import {BrowserRouter, Route} from 'react-router-dom';

//auth helpers

// declaring components
import App from '../components/App';
import SignUpContainer from '../containers/SignUpContainer';
import OnboardContainer from '../containers/OnboardContainer';

const routes = (
  <BrowserRouter>
      <div>
        <App>
          <Route path='/signup' component={SignUpContainer} />
          <Route path='/onboard' component={OnboardContainer} />
        </App>
      </div>
  </BrowserRouter>
);

export default routes;

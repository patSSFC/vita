import React, { PropTypes } from 'react';

const SignUp = ({onCreateUser}) => {
  let firstInput, lastInput, usernameInput, emailInput, passwordInput;
  const handleSubmit = (e) => {
      e.preventDefault();

      onCreateUser({
          first: firstInput.value,
          last: lastInput.value,
          username: usernameInput.value,
          email: emailInput.value,
          password: passwordInput.value
      });
  }
  console.log(handleSubmit);
  return (
      <div>
          <form onSubmit={handleSubmit}>
              <div>
                  <input type="text" className="" placeholder="First name" ref={(first) => firstInput = first} />
              </div>
              <div>
                  <input type="text" className="" placeholder="Last name" ref={(last) => lastInput = last} />
              </div>
              <div>
                  <input type="text" className="" placeholder="Select a username" ref={(username) => usernameInput = username} />
              </div>
              <div>
                  <input type="email" className="" placeholder="Your email" ref={(email) => emailInput = email} />
              </div>
              <div>
                  <input type="password" className="" placeholder="Password (min 6 characters)" ref={(pwd) => passwordInput = pwd}/>
              </div>
              <div>
                  <button type="submit" className="">Sign up</button>
              </div>
          </form>
      </div>
  )
};

SignUp.propTypes = {
    onCreateUser: PropTypes.func.isRequired
};

export default SignUp;

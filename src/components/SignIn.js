import React from 'react';

const SignIn = (props) => {
    return (
        <form onSubmit={props.onHandleSignIn}>
            <div>
                <input type="text" name="email" placeholder="Enter email" onChange={props.onInputChange} value={props.email}/>
            </div>
            <div>
                <input type="password" name="password" placeholder="Enter password" onChange={props.onInputChange} value={props.password}/>
            </div>
            <div>
                <button type="submit">Sign in</button>
            </div>
        </form>
    )
}

export default SignIn;
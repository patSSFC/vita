import React from 'react';

const Main = ({children}) => {
    return (
        <div>
            <h2>Welcome to Vita</h2>
            {children}
        </div>
    )
};

export default Main;
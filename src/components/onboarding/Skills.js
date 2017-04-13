import React from 'react';

const Skills = (props) => {
    return (
        <form>
            <div>
                <input type="text" name="language"/>
            </div>
            <div>
                <input type="number" name="years"/>
            </div>
            <div>
                <input type="number" name="stars"/>
            </div>
        </form>
    )
}

export default Skills;
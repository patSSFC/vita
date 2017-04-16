import React from 'react';

const SkillsWrapper = (props) => {
    return (
        <option
            value={props.value}
            key={props.key}>{props.value}
        </option>
    )
}

export default SkillsWrapper;
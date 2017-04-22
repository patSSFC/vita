import React from 'react';
import SkillsWrapper from './SkillsWrapper'

const Skills = (props) => {
    return (
        <form>
            <select name="skill" onChange={props.onInputChange}>
                {props.skillsList.map((skill) =>{ return <SkillsWrapper value={skill} key={skill._id} />})}
            </select>
            <div>
                <input type="number" name="years" onChange={props.onInputChange}/>
            </div>
            <div>
                <input type="number" name="stars" onChange={props.onInputChange}/>
            </div>
        </form>
    )
}

export default Skills;
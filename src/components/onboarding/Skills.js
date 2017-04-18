import React from 'react';
import SkillsWrapper from './SkillsWrapper'

const Skills = (props) => {
    return (
        <form>
            <select>
                {props.skillsList.map((skill) =>{ return <SkillsWrapper value={skill} key={skill._id} />})}
            </select>
            <div>
                <input type="number" name="experience" onChange={props.onInputChange}/>
            </div>
            <div>
                <input type="number" name="stars" onChange={props.onInputChange}/>
            </div>
        </form>
    )
}

export default Skills;
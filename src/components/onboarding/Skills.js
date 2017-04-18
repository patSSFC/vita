import React from 'react';
import SkillsWrapper from './SkillsWrapper'

const Skills = (props) => {
    return (
        <form>
            <div>
                <input type="text" name="skill"/>
            </div>
            <select>
                {props.skillsList.map((skill) =>{ return <SkillsWrapper value={skill} key={skill._id} />})}
            </select>
            <div>
                <input type="number" name="experience"/>
            </div>
            <div>
                <input type="number" name="stars"/>
            </div>
        </form>
    )
}

export default Skills;
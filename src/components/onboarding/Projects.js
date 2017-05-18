import React from 'react';
import SkillsWrapper from './SkillsWrapper';

export const Projects = (props) => {
    return (
        <div>
            <h2>Add a project here</h2>
            <form action="">
                <select name="skill" onChange={props.onInputChange}>
                    {props.userSkills.map((skill) =>{ return <SkillsWrapper value={skill.name} key={skill.id} />})}
                </select>
                <div>
                    <input type="text" name="title" placeholder="Project Title" onChange={props.onInputChange}/>
                </div>
                <div>
                    <input type="text" name="contribution" placeholder="How did you contribute?" onChange={props.onInputChange}/>
                </div>
                <div>
                    <textarea name="blurb" value={props.blurb} onChange={props.onInputChange} cols="40" rows="10"/>
                </div>
                <div>
                    <input name="project_image" type="file" />
                </div>
            </form>
        </div>
    )
}

export default Projects;
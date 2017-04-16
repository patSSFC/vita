import React, {Component} from 'react';
import Skills from '../components/onboarding/Skills';
import skillsList from '../test/skills';

class SkillsContainer extends Component {
    state = {
        userSkills: [
            {id: "1", skill: "JS", stars: "3"},
            {id: "2", skill: "MEAN", stars: "3"},
            {id: "3", skill: "React", stars: "3"}
        ],
        defaultSkills: skillsList
    }

    render() {
        return (
            <div>
                <h2>Add your skills here</h2>
                <Skills skillsList={this.state.defaultSkills}/>
            </div>
        )
    }
}

export default SkillsContainer;
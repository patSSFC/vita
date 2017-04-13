import React, {Component} from 'react';
import Skills from '../components/onboarding/Skills';

class SkillsContainer extends Component {
    state = {
        skills: [
            {id: "1", skill: "JS", stars: "3"},
            {id: "2", skill: "MEAN", stars: "3"},
            {id: "3", skill: "React", stars: "3"}
        ]
    }

    render() {
        return (
            <div>
                <h2>Add your skills here</h2>
                <Skills />
            </div>
        )
    }
}

export default SkillsContainer;
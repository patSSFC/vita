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
        defaultSkills: skillsList,
        currentSkill: {
            skill: "",
            experience: "",
            stars: ""
        }
    }

    handleInputChange = (e) => {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        })
    }

    handleGetSkills = (e) => {
        //get user skills from db on click
    }

    handleSaveSkills = (e) => {
        //save user skill on submit
    }

    render() {
        return (
            <div>
                <h2>Add your skills here</h2>
                <Skills
                    skillsList={this.state.defaultSkills}
                    onGetSkills={this.handleGetSkills}
                    onSaveSkills={this.handleSaveSkills}
                    onInputChange={this.handleInputChange}/>
            </div>
        )
    }
}

export default SkillsContainer;
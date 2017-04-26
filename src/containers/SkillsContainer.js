import React, {Component} from 'react';
import Skills from '../components/onboarding/Skills';
import skillsList from '../test/skills';
import update from 'immutability-helper';
import {ref} from '../config/constants.js';

class SkillsContainer extends Component {
    state = {
        userSkills: [
            {id: "1", skill: "JS", stars: "3"},
            {id: "2", skill: "MEAN", stars: "3"},
            {id: "3", skill: "React", stars: "3"}
        ],
        //this may not need to be in state but prop since it doesn't change
        defaultSkills: skillsList,
        currentSkill: {
            skill: "",
            years: "",
            stars: ""
        }
    }

    handleInputChange = (e) => {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        console.log(name);
        switch(name) {
            case 'stars':
            case 'skill':
            case 'years':
                const newState = update(this.state.currentSkill,{
                    [name]: {$set: value}
                });
                this.setState({currentSkill: newState});
                break;
            default:
                this.setState({[name]: value});
        }
    }

    handleGetSkills = (e) => {
        //get user skills from db on click
    }

    handleSaveSkills = (e) => {
        //save user skill on submit
        console.log("save skill!", this.state.currentSkill);
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
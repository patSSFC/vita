import React, {Component} from 'react';
import Projects from '../components/onboarding/Projects';
import update from 'immutability-helper';

class ProjectsContainer extends Component {
    state = {
        currentProject: {
            title: "",
            blurb: "Write a quick blurb about your project",
            image: "",
            contribution: "",
            skillsUsed: []
        },
        skills: [
            {id: "1", name: "JavaScript", stars: "3", years: "2"},
            {id: "2", name: "React", stars: "3", years: "1"},
            {id: "3", name: "Angular", stars: "2", years: "1"},
            {id: "4", name: "MEAN", stars: "2", years: "1"},
            {id: "5", name: "Redux", stars: "1", years: "1"}
        ]
    }

    getSkills = () => {
        //use this to initialize state for user's skills
    }

    handleInputChange = (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.value;
        let newState;
        switch(name) {
            case 'skill':
                newState = {...this.state.currentProject};
                newState.skillsUsed.push(value);
                this.setState({currentProject: newState});
                break;
            default:
                newState = update(this.state.currentProject, {
                    [name]: {$set: value}
                });
                this.setState({currentProject: newState});
        }
    }

    render() {
        return (
            <Projects
                blurb={this.state.currentProject.blurb}
                userSkills={this.state.skills}
                onInputChange={this.handleInputChange}/>
        )
    }

}

export default ProjectsContainer;

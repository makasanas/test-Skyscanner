import React from 'react';
import { TeamFull, TeamResp } from './InnerSections';
import './Team.scss';

class Team extends React.Component{
    constructor(){
        super();
        this.state={
        }
    }

    render(){
        return (
            <div id="team-container">
                <div className="headingContainer">
                    <h1>Travel its fun</h1>
                    <h2>About the team</h2>
                </div>
                <TeamFull/>
                <TeamResp/>
            </div>
        );
    }
}

export default Team;
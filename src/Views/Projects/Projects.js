/**
 * Created by apdun on 6/5/2017.
 */
import React, { Component } from 'react';
import ProjectBlock from "../../Components/projectBlock/projectBlock";

class Projects extends Component {

    render() {
        return (
            <div>
                <ProjectBlock name="AshleyTLee.com" description="Some Test here" color="#8AD0D5" accent="#4B7FC0" image="AshleyTLee.PNG"/>
                <ProjectBlock name="TravelJuliasWay.com" description="Some Test here" color="#3C4768" accent="#EBECEC"  image="TravelJuliasWay.PNG"/>
            </div>
        );
    }
}

export default Projects;
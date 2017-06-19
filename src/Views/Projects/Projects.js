/**
 * Created by apdun on 6/5/2017.
 */
import React, { Component } from 'react';
import ProjectBlock from "../../Components/projectBlock/projectBlock";
import WorkWith from '../../Components/workWith/workWith';

class Projects extends Component {

    render() {
        return (
            <div>
                <ProjectBlock name="Ashley T Lee Miniseries" description="Some Test here" color="#8AD0D5" accent="#4B7FC0" image="AshleyTLee.PNG" url="ashleytlee.com"/>
                <ProjectBlock name="Travel Julia's Way" description="Some Test here" color="#3C4768" accent="#EBECEC"  image="TravelJuliasWay.PNG" url="traveljuliasway.com"/>
                <WorkWith title="Like What You See?"/>
            </div>
        );
    }
}

export default Projects;
/**
 * Created by apdun on 6/6/2017.
 */
import React, { Component } from 'react';
import './projectBlock.css'
import {Section, HeroBody, Container} from 'bloomer'

export default class ProjectBlock extends Component {

    render() {
        return (
            <div>
                
                <Section className="project" style={{backgroundColor: this.props.color}}>
                    <HeroBody>
                        <Container className="project-container">
                            <img src={this.props.image} alt="" className="heroImage" style={{boxShadow: '5px 5px 10px' + this.props.accent}}/>

                            <div className="innerContainer">
                                <h1 className="title" style={{color: this.props.accent}}>
                                    { this.props.name }
                                </h1>
                                <h2 className="subtitle" style={{color: this.props.accent}}>
                                    { this.props.description }
                                </h2>
                            </div>
                        </Container>
                    </HeroBody>
                </Section>

            </div>
        );
    }
}
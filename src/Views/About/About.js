/**
 * Created by apdun on 6/5/2017.
 */
import React, { Component } from 'react';
import {Column, Columns, Section, Content} from 'bloomer';
import FontAwesome from 'react-fontawesome';
import './About.css'

class About extends Component {

    render() {
        return (
            <div>

                <Section className="mission">
                    <Content>
                        <Columns isCentered>
                            <div>
                                <FontAwesome name='fire' size='2x'/>
                                <h1>Our Mission</h1>
                            </div>
                        </Columns>
                        <Columns isCentered>
                            <Column isMobile={12} isDesktop={6}>
                                <p>To create magnificent websites using the latest in web technologies to create a unique user experience</p>
                            </Column>

                            <Column isMobile={12} isDesktop={6}>
                                <p>To create magnificent websites using the latest in web technologies to create a unique user experience</p>
                            </Column>
                        </Columns>
                    </Content>
                </Section>
                <Section className="whoWeAre">
                    <Content>
                        <Columns isCentered>
                            <div>
                                <FontAwesome name='group' size='2x' className="whoWeAre"/>
                                <h1 className="whoWeAre">Who We Are</h1>
                                <p className="whoWeAre">
                                    We are a group of passionate developers that are looking to push the boundaries of technology.
                                </p>
                            </div>
                        </Columns>
                        <Columns>
                            <Column isMobile={12} isDesktop={6}>
                                <div  className="whoWeAre profile">
                                    <h3 className="whoWeAre titleProfile" >Adrian Dunham</h3>
                                    <h4 className="whoWeAre subProfile" >Lead Developer</h4>
                                    <p>

                                    </p>
                                </div>
                            </Column>

                            <Column isMobile={12} isDesktop={6}>
                                <div  className="whoWeAre profile">
                                    <h3 className="whoWeAre titleProfile" >Anthony Garera</h3>
                                    <h4 className="whoWeAre subProfile" >Lead Client Liaison/Developer</h4>
                                    <p>

                                    </p>
                                </div>
                            </Column>

                        </Columns>
                    </Content>
                </Section>

            </div>
        );
    }
}

export default About;
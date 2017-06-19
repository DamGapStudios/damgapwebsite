/**
 * Created by apdun on 6/5/2017.
 */
import React, { Component } from 'react';
import {Container, Column, Columns, Box, Hero, HeroBody, Title, Section, Content} from 'bloomer';
import FontAwesome from 'react-fontawesome';
import './About.css'

class About extends Component {

    render() {
        return (
            <div>
                <Hero>
                    <HeroBody className="hero is-primary" isSize="medium">
                        <Container hasTextAlign='centered'>
                            <Title>About Us</Title>
                        </Container>
                    </HeroBody>
                </Hero>

                <Section className="mission">
                    <Content>
                        <Columns isCentered>
                            {/*<Column isMobile={0} isDesktop={3}>Words</Column>*/}
                            <Column isMobile={12} isDesktop={6}>
                                <Box className="mission">
                                    <div>
                                        <FontAwesome name='users' size='2x'/>
                                        <h1 className="mission title">Our Mission</h1>
                                        <p>To create magnificent websites using the latest in web technologies to create a unique user experience</p>
                                    </div>
                                </Box>
                            </Column>
                            {/*<Column isMobile={0} isDesktop={3}>Words</Column>*/}
                        </Columns>

                        <Columns>
                            <Column>

                            </Column>
                        </Columns>
                    </Content>
                </Section>

            </div>
        );
    }
}

export default About;
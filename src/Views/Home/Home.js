/**
 * Created by apdun on 6/5/2017.
 */
import React, { Component } from 'react';
import './Home.css'
import {Hero, HeroBody, Container, Title, Section, Columns, Column, Notification, Content} from 'bloomer'
import FontAwesome from 'react-fontawesome';

class Home extends Component {

    render() {
        return (
            <div>

                <Hero className="hero is-primary" isSize='large'>

                    <HeroBody>
                        <Container hasTextAlign='centered'>
                            {/*Slider Here*/}
                            <Title><span className="text-develop">Develop</span> | <span className="text-create">Create</span> | <span className="text-impress">Impress</span></Title>
                        </Container>
                    </HeroBody>

                </Hero>


                <Section>
                    <Columns>
                        <Column isMobile={12} isDesktop={5}>
                            <Notification hasTextAlign='centered' className="wwa"> <Title isSize={2}>What we do</Title></Notification>
                        </Column>

                        <Column isMobile={12} isDesktop={7}>
                            <Content>
                                <div className="wwa">
                                    <h1 className="wwa title"><FontAwesome name='code' /> Develop</h1>
                                    <p className="wwa content">Developing site to help you </p>
                                </div>

                                <div className="wwa">
                                    <h1 className="wwa title"><FontAwesome name='paint-brush' /> Create</h1>
                                    <p className="wwa content">Creating masterpieces that push technology </p>
                                </div>

                                <div className="wwa">
                                    <h1 className="wwa title"><FontAwesome name='handshake-o' /> Impress</h1>
                                    <p className="wwa content">Show off you site with Pride! </p>
                                </div>
                            </Content>
                        </Column>
                    </Columns>
                </Section>

                {/*Work With Element Here*/}

            </div>
        );
    }
}

export default Home;
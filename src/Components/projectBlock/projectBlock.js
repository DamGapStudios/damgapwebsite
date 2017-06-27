/**
 * Created by apdun on 6/6/2017.
 */
import React, { Component } from 'react';
import './projectBlock.css'
import {Section, HeroBody, Container, Button, Columns, Column} from 'bloomer'

export default class ProjectBlock extends Component {

    render() {
        return (
            <div>
                
                <Section className="project" style={{backgroundColor: this.props.color}}>
                    <HeroBody>
                        <Container>
                            <Columns>
                                <Column isMobile={12} isDesktop={4}>
                                    {/*<iframe src="http://www.ashleytlee.com" style={{border: `solid 2px` + this.props.accent, width: '100%'}} className="heroImage">*/}
                                        {/*<p> Your browser does not support iframes</p>*/}
                                    {/*</iframe>*/}
                                    <img src={this.props.image} alt="" className="heroImage" style={{border: `solid 2px` + this.props.accent}}/>
                                </Column>

                                <Column isMobile={12} isDesktop={8}>
                                    <h1 className="title" style={{color: this.props.accent}}>
                                        { this.props.name }
                                    </h1>
                                    <h2 className="subtitle" style={{color: this.props.accent}}>
                                        { this.props.description }
                                    </h2>
                                    <Button style={{backgroundColor: this.props.color, border: `2px solid`+ this.props.accent}} isSize="medium" className="link">
                                        <a  href={this.props.url} style={{ color: this.props.accent}} >
                                            Visit
                                        </a>
                                    </Button>
                                </Column>
                            </Columns>

                        </Container>
                    </HeroBody>
                </Section>

            </div>
        );
    }
}
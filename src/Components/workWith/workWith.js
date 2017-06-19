/**
 * Created by apdun on 6/6/2017.
 */
import React, { Component } from 'react';
import './workWith.css'
import {Columns, Column, Hero, HeroBody, Container, Title, Subtitle, Field, Label, Control, Input, TextArea, Button} from 'bloomer'

export default class WorkWith extends Component {

    render() {
        return (
            <div>

                <Hero className="contact-form" isSize='medium'>

                    <HeroBody>
                        <Container hasTextAlign='centered' className="contact-form">
                            <Title className="contact-form title">Want To Work With Us?</Title>
                            <Subtitle isSize={4} className="contact-form">Fill out the form below and well get in contact</Subtitle>
                            <Columns>
                                <Column isDesktop={6}>
                                    <Field>
                                        <Label className="contact-form">Name</Label>
                                        <Control>
                                            <Input type="text" className="contact-form"/>
                                        </Control>
                                    </Field>
                                </Column>

                                <Column isDesktop={6}>
                                    <Field>
                                        <Label className="contact-form">Email</Label>
                                        <Control>
                                            <Input type="email" className="contact-form"/>
                                        </Control>
                                    </Field>
                                </Column>
                            </Columns>

                            <Columns>
                                <Column isDesktop={12}>
                                    <Field>
                                        <Field>
                                            <Control>
                                                <TextArea placeholder='Tell Us About Your Project' className="contact-form"/>
                                            </Control>
                                        </Field>
                                    </Field>
                                </Column>
                            </Columns>

                            <Columns>
                                <Column>
                                    <Field isGrouped>
                                        <Control>
                                            <Button className="contact-form" isSize="medium">Contact Us</Button>
                                        </Control>
                                    </Field>
                                </Column>
                            </Columns>
                        </Container>
                    </HeroBody>

                </Hero>

            </div>
        );
    }
}
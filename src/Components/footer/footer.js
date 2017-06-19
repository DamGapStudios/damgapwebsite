/**
 * Created by Adunh on 6/19/2017.
 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './footer.css'
import FontAwesome from 'react-fontawesome';
import {Footer, Container, Content, Columns, Column, Level, LevelLeft, LevelRight, LevelItem, Subtitle, Control, Field, Input, Button} from 'bloomer'


export default class PageFooter extends Component {


    render() {
        return (
            <div>

                <Footer id='footer'>

                    <Level>
                        <LevelLeft>
                            <LevelItem>
                                <Subtitle isParagraph isSize={5} className="fText"><FontAwesome name='copyright' /> 2017 DamGap Studios | All Rights Reserved</Subtitle>
                            </LevelItem>
                        </LevelLeft>
                        <LevelRight>
                            <LevelItem><FontAwesome name='github' size="2x" /></LevelItem>
                        </LevelRight>
                    </Level>

                </Footer>

            </div>
        );
    }
}

/**
 * Created by Adunh on 6/19/2017.
 */
import React, { Component } from 'react';
import './footer.css'
import FontAwesome from 'react-fontawesome';
import {Footer, Level, LevelLeft, LevelRight, LevelItem, Subtitle} from 'bloomer'


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

/**
 * Created by apdun on 6/2/2017.
 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.css'
// import FontAwesome from 'react-fontawesome';
import {Nav, NavLeft, NavItem, NavCenter, NavToggle, NavRight} from 'bloomer'


export default class Header extends Component {
    state = { isActive: false };

    onClickNav = () => {
        this.setState(state => ({ isActive: !state.isActive }));
    }


    render() {
        return (
            <div>

                <Nav>
                    <NavLeft>
                        <NavItem className="brand">DamGap Studios</NavItem>
                    </NavLeft>
                    <NavCenter>
                        {/*<NavItem>*/}
                            {/*<Icon>*/}
                                {/*<FontAwesome name='github' />*/}
                            {/*</Icon>*/}
                        {/*</NavItem>*/}
                        {/*<NavItem>*/}
                            {/*<Icon>*/}
                                {/*<FontAwesome name='twitter' />*/}
                            {/*</Icon>*/}
                        {/*</NavItem>*/}
                    </NavCenter>
                    <NavToggle isActive={this.state.isActive} onClick={this.onClickNav} />
                    <NavRight isMenu isActive={this.state.isActive} onClick={this.onClickNav} className=".nav">
                        <Link to="/" className="nav-item">Home</Link>
                        <Link to="/about" className="nav-item">About</Link>
                        <Link to="/projects" className="nav-item">Projects</Link>
                        {/*<Link to="/blog" className="nav-item">Blog</Link>*/}
                    </NavRight>
                </Nav>

            </div>
        );
    }
}

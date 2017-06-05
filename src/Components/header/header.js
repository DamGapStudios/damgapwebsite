/**
 * Created by apdun on 6/2/2017.
 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Header extends Component {

    render() {
        return (
            <div>
                DamGap Studios
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                </ul>
            </div>
        );
    }
}

export default Header;
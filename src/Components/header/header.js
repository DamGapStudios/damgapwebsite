/**
 * Created by apdun on 6/2/2017.
 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.css'

export default class Header extends Component {


    render() {
        return (
            <div>
                <nav className="nav">
                    <div className="nav-left">
                        <a className="nav-item">
                           DamGap Studios
                        </a>
                    </div>

                    <div className="nav-center">
                        <a className="nav-item">
                          <span className="icon">
                            <i className="fa fa-github"></i>
                          </span>
                        </a>
                        <a className="nav-item">
                          <span className="icon">
                            <i className="fa fa-twitter"></i>
                          </span>
                        </a>
                    </div>

                    {/*<!-- This "nav-toggle" hamburger menu is only visible on mobile -->*/}
                    {/*<!-- You need JavaScript to toggle the "is-active" class on "nav-menu" -->*/}
                    <span className="nav-toggle">
                        <Link to="/" className="nav-item">Home</Link>
                        <Link to="/about" className="nav-item">About</Link>
                        <Link to="/projects" className="nav-item">Projects</Link>
                        <Link to="/blog" className="nav-item">Blog</Link>
                    </span>

                    {/*<!-- This "nav-menu" is hidden on mobile -->*/}
                    {/*<!-- Add the modifier "is-active" to display it on mobile -->*/}
                    <div className="nav-right nav-menu">
                        <Link to="/" className="nav-item">Home</Link>
                        <Link to="/about" className="nav-item">About</Link>
                        <Link to="/projects" className="nav-item">Projects</Link>
                        <Link to="/blog" className="nav-item">Blog</Link>
                    </div>
                </nav>
            </div>
        );
    }
}

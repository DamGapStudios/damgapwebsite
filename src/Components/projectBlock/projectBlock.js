/**
 * Created by apdun on 6/6/2017.
 */
import React, { Component } from 'react';
import './projectBlock.css'

export default class ProjectBlock extends Component {

    render() {
        return (
            <div>
                <section className="hero" style={{backgroundColor: this.props.color}}>
                    <div className="hero-body">
                        <div className="container">
                            <img src={this.props.image} alt="" className="heroImage" style={{boxShadow: '5px 5px 10px' + this.props.accent}}/>

                            <div className="innerContainer">
                                <h1 className="title" style={{color: this.props.accent}}>
                                    { this.props.name }
                                </h1>
                                <h2 className="subtitle" style={{color: this.props.accent}}>
                                    { this.props.description }
                                </h2>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        );
    }
}
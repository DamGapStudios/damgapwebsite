/**
 * Created by apdun on 6/6/2017.
 */
import React, { Component } from 'react';
import './blogPost.css';

export default class Post extends Component {


    render() {
        return (
            <div>
                <div className="card post">
                    <div className="card-content">

                        <p className="title">{ this.props.title } </p>
                        <div className="content">
                            { this.props.post }
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

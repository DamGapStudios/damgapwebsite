/**
 * Created by apdun on 6/5/2017.
 */
import React, { Component } from 'react';
import Post from "../../Components/blogPost/blogPost";

class Blog extends Component {

    render() {
        return (
            <div className="container">
                <Post title="Post One" post="Some Text here"/>
            </div>
        );
    }
}

export default Blog;

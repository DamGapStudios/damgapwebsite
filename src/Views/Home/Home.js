/**
 * Created by apdun on 6/5/2017.
 */
import React, { Component } from 'react';
import './Home.css'

class Home extends Component {

    render() {
        return (
            <div>
                <section className="hero is-primary">
                    <div className="hero-body">
                        <div className="container">
                            <h1 className="title">
                                Develop
                            </h1>
                        </div>
                    </div>
                </section>

                <section className="hero is-primary">
                    <div className="hero-body">
                        <div className="container">
                            <h1 className="title">
                                Create
                            </h1>
                        </div>
                    </div>
                </section>

                <section className="hero is-primary">
                    <div className="hero-body">
                        <div className="container">
                            <h1 className="title">
                                Impress
                            </h1>
                        </div>
                    </div>
                </section>

            </div>
        );
    }
}

export default Home;
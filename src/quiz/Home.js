import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import Quiz from './Quiz';

function Home() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="card text-white bg-dark mb-3 shadow border-black rounded">
                        <div className="card-header">
                            <h2>Welcome to the Home of React Quiz</h2>
                        </div>
                        <Quiz/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;

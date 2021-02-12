import React from 'react';
import Answers from './Answers';
import Questions from './Questions';

function Quiz() {
    return (
        <div className="card-body">
            <Questions/>
            <div className="card-text">
                <div className="btn-group btn-gorup-vertical btn-group-toggle w-100" data-toggle="buttons">
                    <Answers/>
                </div>
            </div>    
        </div>
    )
}

export default Quiz;

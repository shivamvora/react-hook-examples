import React from 'react';


function Questions({question}) {
    return (
        <div>
            <h3 className="card-title"> 
                {question}
            </h3>
        </div>
    )
}

export default Questions;

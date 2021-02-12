import React from 'react';
import './btn.css';


function Answers({answer}) {
    return (
        <div>
            <label className="btn btn-lg btn-secondary my-1">
              <input type="radio" name="options" id="option1"/>
                {answer}
            </label>
        </div>
    )
}

export default Answers;

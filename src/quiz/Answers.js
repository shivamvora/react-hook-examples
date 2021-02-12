import React from 'react';
import './btn.css';


function Answers({answer,onAnswer}) {
    return (
        <div>
            <label className="btn btn-lg btn-secondary my-1">
              <input type="radio" name="options" id="option1" onClick={()=>onAnswer(answer)}/>
                <span dangerouslySetInnerHTML={{__html: answer}}></span>
            </label>
        </div>
    )
}

export default Answers;

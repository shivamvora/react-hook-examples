import React,{useState,useEffect} from 'react';
import Answers from './Answers';
import Questions from './Questions';

function Quiz() {
    const [questions,setQestions] = useState(null);
    useEffect(()=>{
        if(!questions){
            
        }
    },[questions])
    const result  = answers.map(answer => <Answers answer={answer}/>)
    return (
        <div className="card-body">
            <Questions/>
            <div className="card-text">
                <div className="btn-group btn-gorup-vertical btn-group-toggle w-100" data-toggle="buttons">
                    {result.sort(()=>Math.random()-0.5)}
                    
                </div>
            </div>    
        </div>
    )
}

export default Quiz;

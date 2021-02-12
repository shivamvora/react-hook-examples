import React,{useState,useEffect} from 'react';
import Answers from './Answers';
import Questions from './Questions';
import axios from 'axios';

function Quiz() {
    const [questions,setQestions] = useState(null);
    const [count,setCount] = useState(0);
    const getApi = () => {
        axios.get("https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple")
            .then(res => setQestions(res.data.results))
            .catch(err => console.log(err));
    };
    useEffect(()=>{
        if(!questions){
            getApi();
        }
        console.log(questions);
    },[questions,count]);
    if(!questions) return <p className="text-light text-muted">Loading...</p>;
    const answers = [...questions[count].incorrect_answers,questions[count].correct_answer];
    // const result  = answers.map(answer => <Answers answer={answer}/>)
    return (
        <div className="card-body">
            <Questions question={questions[count].question}/>
            <div className="card-text">
                <div className="btn-group btn-gorup-vertical btn-group-toggle w-100" data-toggle="buttons">
                    {/* {result.sort(()=>Math.random()-0.5)} */}
                    {answers.map((answer,index) => (
                        <Answers key={index} answer={answer}/>
                    ))}
                </div>
            </div>    
        </div>
    )
}

export default Quiz;

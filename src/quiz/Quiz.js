import React,{useState,useEffect} from 'react';
import Answers from './Answers';
import Questions from './Questions';
import axios from 'axios';

function Quiz({onResult,onFinish}) {
    const [questions,setQestions] = useState(null);
    const [count,setCount] = useState(0);
    const [score,setScore] = useState(0);
    
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
    },[questions,count,score]);
    if(!questions) return <p className="text-light text-muted">Loading...</p>;
    const answers = [...questions[count].incorrect_answers,questions[count].correct_answer];

    const result = answers.sort(()=>Math.random() - 0.5);
    // const result  = answers.map(answer => <Answers answer={answer}/>)
    const checkAnswer = (answer) => {
        if(answer === questions[count].correct_answer){
            setScore(score + 10);
        }
        if(count<questions.length-1){ 
            setCount(count + 1);
        }
        else{
            onFinish(true);
            onResult(score);
        }
        
    };
    
    return (
        <div className="card-body">
            <Questions question={questions[count].question}/>
            <div className="card-text">
                <div className="btn-group btn-gorup-vertical btn-group-toggle w-100" data-toggle="buttons">
                    {/* {result.sort(()=>Math.random()-0.5)} */}
                    {result.map((answer,index) => (
                        <Answers key={index} answer={answer} onAnswer={(answer)=>checkAnswer(answer)}/>
                    ))}
                </div>
            </div>    
        </div>
    )
}

export default Quiz;

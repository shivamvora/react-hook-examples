import React, {useState} from 'react';
import "bootstrap/dist/css/bootstrap.css";
import Quiz from './Quiz';
import './Home.css';


function Home() {
    
    const [finish,setFinish] = useState(false);
    const [result,setResult] = useState(0);
    if(finish){
        return <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="card text-success bg-dark mb-3 shadow border-black rounded">
                              
                               <span className="sp">Result:</span> <sapn className="rs"> {result} out of 100  </sapn>         
                                          
                        <button className="btn-shivam" onClick={()=>setFinish(false)}>Try Again</button>
                    </div>
                    
                </div>
            </div>
        </div>
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="card text-white bg-dark mb-3 shadow border-black rounded">
                        <div className="card-header">
                            <h2>Welcome to the Home of React Quiz with Shivam Vora 1 question = 10 points mindwell</h2>
                        </div>
                        <Quiz onResult={(result)=>setResult(result)} onFinish={(finish)=>setFinish(finish)} name/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;

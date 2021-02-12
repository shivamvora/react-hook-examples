import React, {useState} from 'react';
import './App.css';
import Effect from './components/Effect';
import State from './components/State';
import Home from './quiz/Home';

function App() {
  // const [num,setNum] = useState(0);
  // return (
  //   <div className="App">
  //     <br/>
  //     {num}
  //     <State/>
  //     <Effect/>
  //     <button onClick={()=>setNum(num+1)}>Update</button>
  //   </div>
  //);
return( 
  <div className="App">
    <div className="Header">
      <Home/>
    </div>
  </div>
);
}

export default App;

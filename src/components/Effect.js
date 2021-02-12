import React, {useEffect,useState} from 'react';

function Effect() {
    const [count,setCount] = useState(1);
    const [num,setNum] = useState(1);
    const [toggle,setToggle] = useState(false);

    useEffect(() => {
        console.log("I'm logging everything everytime", count);    
    },[count,num,toggle]);

    

    return (
        
        <div>
                <button onClick={()=>setCount(count + 1)}>Update Count</button>
                <button onClick={()=>setNum(num + 1)}>Update Num</button>
                <button onClick={()=>setToggle(!toggle)}>Update Toggle</button>
        </div>
        
    )
    
}

export default Effect;

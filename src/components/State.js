import React, {useState} from 'react';

function State() {
    const [users,setUsers] = useState([{name:'shivam','age':20, country:'India'}]);

        const submitForm = (e) => {
            const user = {
                name: 'Ivan',
                age: '21',
                country: 'united state'
            }
            setUsers([...users,user])
        }

    return (
        <div>
            
                <h2>
                    { users.map(user =>{
                        return <div>
                            <h2>{user.name} - {user.age}</h2>
                            <p>{user.country}</p>

                        </div>;
                    })}
                </h2>
                    <button onClick={submitForm}>Add users</button>
        </div>
    )
}

export default State;

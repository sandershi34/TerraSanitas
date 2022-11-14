import React, { useState } from 'react';
import { registerUser} from './Web3Client';

function App() {

    const [registered, setRegistered] = useState(false);
    
    const register = () =>{
        registerUser().then((tx)=>{
            console.log(tx);
            setRegistered(true);
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    return (
    <div className='App'>
        {!registered ? (
        <button onClick={()=> register()}> register </button>
        ):(
            <p>Registered</p>
        )}
    </div>);
}

export default App;
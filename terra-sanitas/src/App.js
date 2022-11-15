import React, { useState } from 'react';
import { registerUser, getUsers} from './Web3Client';

function App() {

    const [registered, setRegistered] = useState(false);
    
    const register = async () =>{
        await registerUser().then((tx)=>{
            console.log(tx);
            setRegistered(true);
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    const viewUsers = async () =>{
        await getUsers().then((tx)=>{
            console.log(tx);
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
        <button onClick={()=> viewUsers()}> viewUsers </button>
    </div>);
}

export default App;
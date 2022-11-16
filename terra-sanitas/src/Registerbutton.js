import React, { useState } from 'react';
import { RegisterUser} from './Web3Client';

function RegisterButton() {

    const [registered, setRegistered] = useState(false);
    
    const register = async () =>{
        await RegisterUser().then((tx)=>{
            console.log(tx);
            setRegistered(true);
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    return (
    <div className='register'>
        {!registered ? (
        <button onClick={()=> register()}> Register </button>
        ):(
            <p>Registered</p>
        )}
    </div>);
}

export default RegisterButton;
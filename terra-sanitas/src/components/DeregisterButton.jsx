import React from 'react';
import { DeregisterUser} from '../Web3Client';

function DeregisterButton() {

    
    const Deregister = async () =>{
        await DeregisterUser().then((tx)=>{
            console.log(tx);
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    return (
    <div className='deregister'>
        <button onClick={()=> Deregister()}> Deregister </button>
    </div>);
}

export default DeregisterButton;
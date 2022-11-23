import React from 'react';
import { RequestInfo} from './Web3Client';

function RequestInfoButton() {

    
    const Request = async () =>{
        await RequestInfo().then((tx)=>{
            console.log(tx);
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    return (
    <div className='deregister'>
        <button onClick={()=> Request()}> RequestInfo </button>
    </div>);
}

export default RequestInfoButton;
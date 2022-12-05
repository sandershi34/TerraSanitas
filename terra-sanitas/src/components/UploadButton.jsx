import React from 'react';
import { UploadInfo} from '../Web3Client';

function UploadButton() {

    
    const Upload = async () =>{
        await UploadInfo().then((tx)=>{
            console.log(tx);
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    return (
    <div className='upload'>
        <button onClick={()=> Upload()}> UploadInfo </button>
    </div>);
}

export default UploadButton;
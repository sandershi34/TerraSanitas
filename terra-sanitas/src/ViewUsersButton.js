import React from 'react';
import { GetUsers} from './Web3Client';

function ViewUsersButton() {

    
    const ViewUsers = async () =>{
        await GetUsers().then((tx)=>{
            console.log(tx);
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    return (
    <div className='view-users'>
        <button onClick={()=> ViewUsers()}> ViewUsers </button>
    </div>);
}

export default ViewUsersButton;
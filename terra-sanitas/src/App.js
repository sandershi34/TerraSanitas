import React from 'react';
import Registerbutton from './Registerbutton';
import DeregisterButton from './DeregisterButton';
import UploadButton from './Uploadbutton';
import ViewUsersButton from './ViewUsersButton';
import RequestInfoButton from './RequestInfoButton';


function App() {

    return (
    <div className='App'>
        <Registerbutton />
        <DeregisterButton />
        <UploadButton />
        <ViewUsersButton />
        <RequestInfoButton />
    </div>);
}

export default App;
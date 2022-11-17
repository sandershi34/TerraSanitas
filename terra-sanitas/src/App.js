import React from "react";
import Registerbutton from "./Registerbutton";
import DeregisterButton from "./DeregisterButton";
import UploadButton from "./Uploadbutton";
import ViewUsersButton from "./ViewUsersButton";
import RequestInfoButton from "./RequestInfoButton";

function App() {
  return (
    <div className="App">
      <h1>Terra Sanitas</h1>
      <div className="block">
        <h4>Register/Deregister from Blockchain</h4>
        <Registerbutton />
        <DeregisterButton />
      </div>
      <div className="block">
        <h4>Request User List</h4>
        <ViewUsersButton />
      </div>
      <div className="block">
        <h4>Request User Info</h4>
        <RequestInfoButton />
      </div>
      <div className="block">
        <h4>Upload Info</h4>
        <div>
          <input className="choosefile" id="image-file" type="file" />
        </div>

        <UploadButton />
      </div>
    </div>
  );
}

export default App;

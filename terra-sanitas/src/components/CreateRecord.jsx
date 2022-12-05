import React, { useState } from "react";

function CreateRecord(){ 
    var state = {
        name: '',
        body: '',
    }
    // const [input,setInput] = useState({
    //     name: '',
    //     info: '',
    //     date: '',
    //     id: null
    // })

    const handleChange = (event) =>{
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState = {
            [name]:value
        }
        console.log(this.state)

        
    }

    return <div className = 'container'>
        <h2> Input Health Record</h2>
        <form>
            <div className="form-group">
                <input onChange={handleChange} name = 'patient' type ='text' value={this.state.name} autoComplete="off" className = "form-control" placeholder="name"></input>
            </div>

            <div className = "form-group">
                <textarea onChange = {handleChange} name = "patientinfo" value={this.state.body} autoComplete="off" className="form-control" placeholder="health information"></textarea>
            </div>

            <button className="btn btn-lg btn-info"> Add Patient Info</button>
        </form>
    </div>
}

export default CreateRecord;
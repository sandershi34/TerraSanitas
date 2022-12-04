import React, { useState } from "react";

function CreateRecord(){ 
    const [input,setInput] = useState({
        name: '',
        date: '',
        id: null
    })

    function handleChange(event){
        const {name,value} = event.target

        setInput(prevInput =>{
            return{
                ...prevInput,
                [name]:value
            }
        })
    }

    return <div className = 'container'>
        <h2> Input Health Record</h2>
        <form>
            <div className="form-group">
                <input onChange={handleChange} name = 'patient' value={input.patient} autoComplete="off" className = "form-control" placeholder="name"></input>
            </div>

            <div className = "form-group">
                <textarea onChange = {handleChange} name = "healthinfo" value={input.content} autoComplete="off" className="form-control" placeholder="health information"></textarea>
            </div>

            <button className="btn btn-lg btn-info"> Add Patient Info</button>
        </form>
    </div>
}

export default CreateRecord;
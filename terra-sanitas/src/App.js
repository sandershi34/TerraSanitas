import React from "react";
import axios from 'axios';

class App extends React.Component{

  state = {
    name: '',
    body: '',
    date:{},
    list:[]
}
  // componentDidMount = () =>{
  //   this.getPatientList()
  // }
  list_button = () =>{
    this.getPatientList()
  }
  test = () => {

  }
  getPatientList = () =>{
    axios.get('/api')
      .then((res)=>{
        console.log("Data has been received");
        const data = res.data;
        this.setState({list:data})
      })
      .catch(()=>{
        console.log("Data has not been recieved")
      })
  }

    handleChange = (event) =>{
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState( {
        [name]:value
    })

    }

    submit = (event) => {
      event.preventDefault();
      const payload = {
        name : this.state.name,
        body : this.state.body,
        date : Date.now()
      };
        axios({
          url: '/api/save',
          method: 'POST',
          data: payload
        }).then(()=>{
          console.log('data has been sent to the server')
          this.resetUserInputs();
        }).catch(()=>{
          console.log('Internal Server Error')
        })
      }

    resetUserInputs = () => {
      this.setState({
        name: '',
        body: ''
      });

    }

    displayUserList = (posts) =>{
      if(!posts.length) return null;
      return posts.map((post,index)=>(
        <div key = {index}>
          <h3>{post.name}</h3>
          <p>{post.body}</p>
        </div>
      ))
    }
    
    

  render(){
   return(   
    <div className = 'container'>
      <h2> Input Health Record</h2>
        <form>
            <div className="form-group">
                <input onChange={this.handleChange} name = 'name' type ='text' value={this.state.name} autoComplete="off" className = "form-control" placeholder="name"></input>
            </div>

            <div className = "form-group">
                <textarea onChange = {this.handleChange} name = "body" value={this.state.body} autoComplete="off" className="form-control" placeholder="health information"></textarea>
            </div>

            <button onClick ={this.submit} className="btn btn-lg btn-info"> Add Patient Info</button>
        </form>

        <div className="patientList">
          <button onClick = {this.list_button}>Display User List</button>
            {this.displayUserList(this.state.list)}
        </div>
    </div>
   )
  };
 
}

export default App;

import React from "react";
import axios from "axios";
import { UploadInfo, RequestInfo } from "./Web3Client";
import RegisterButton from "./components/Registerbutton";
import DeregisterButton from "./components/DeregisterButton";
import "./App.css";

class App extends React.Component {
  state = {
    name: "",
    body: "",
    date: {},
    list: [],
  };

  list_button = async () => {
    this.authenicateRequest()
  };
  authenticationUpload = (event) => {
    event.preventDefault()
    UploadInfo()
      .then((tx) => {
        this.submit()
      })
      .catch((err) => {
        console.log(err);
      });
  }
  submit = () => {
    const payload = {
      name: this.state.name,
      body: this.state.body,
      date: new Date(Date.now()).toLocaleString(),
    };
    axios({
      url: "/api/save",
      method: "POST",
      data: payload,
    })
      .then(() => {
        console.log("data has been sent to the server");
        this.resetUserInputs();
      })
      .catch(() => {
        console.log("Internal Server Error");
      });
  };
  authenicateRequest = () => {
    RequestInfo()
      .then((tx) => {
        this.getList()
        
      })
      .catch((err) => {
        console.log(err);
      });
  };

  getList = () => {
    axios
      .get("/api")
      .then((res) => {
        console.log("Data has been received");
        const data = res.data;
        this.setState({ list: data });
      })
      .catch(() => {
        console.log("Data has not been recieved");
      });
  };
  handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value,
    });
  };


  resetUserInputs = () => {
    this.setState({
      name: "",
      body: "",
    });
  };

  displayUserList = (posts) => {
    if (!posts.length) return null;
    return posts.map((post, index) => (
      <tr>
        <td>{post.name}</td>
        <td>{post.date}</td>
        <td>{post.body}</td>
      </tr>
    ));
  };

  render() {
    return (
      <div className="container">
        <RegisterButton />
        <DeregisterButton />
        <h2> Input Health Record</h2>
        <form>
          <div className="form-group">
            <input
              onChange={this.handleChange}
              name="name"
              type="text"
              value={this.state.name}
              autoComplete="off"
              className="form-control"
              placeholder="name"
            ></input>
          </div>

          <div className="form-group">
            <textarea
              onChange={this.handleChange}
              name="body"
              value={this.state.body}
              autoComplete="off"
              className="form-control"
              placeholder="health information"
            ></textarea>
          </div>

          <button onClick={this.authenticationUpload} className="btn btn-lg btn-info">
            {" "}
            Add Patient Info
          </button>
        </form>

        <div className="patientList">
          <button onClick={this.list_button}>Display User List</button>
          <br />
          <table>
            <tr>
              <th>Name</th>
              <th>Date</th>
              <th>Description</th>
            </tr>
            {this.displayUserList(this.state.list)}
          </table>
        </div>
      </div>
    );
  }
}

export default App;
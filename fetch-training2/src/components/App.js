import React, { Component } from "react";
import "./App.css";
import NameList from "./NameList";

const API = "https://jsonplaceholder.typicode.com/users";

class App extends Component {
  state = {
    i: -1,
    users: []
  };

  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then(data => {
        const user = data;

        this.setState(prevState => ({
          i: prevState.i + 1,
          users: prevState.users.concat(user[i])
        }));
      });
  }
  render() {
    return (
      <div className="App">
        <NameList users={this.state.users} />
      </div>
    );
  }
}

export default App;

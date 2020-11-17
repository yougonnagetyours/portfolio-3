import React, { Component } from 'react';
import './AddTask.css'

class AddTask extends Component {
  minDate = new Date().toISOString().slice(0, 10);

  state = {
    text: '',
    checked: false,
    date: this.minDate
  }
  handleInput = (e) => {
    this.setState({
      text: e.target.value
    })
  }
  handleCheckbox = (e) => {
    this.setState({
      checked: e.target.checked
    })
  }
  handleDate = (e) => {
    this.setState({
      date: e.target.value
    })
  }
  handleAddTask = () => {
    const add = this.props.add(this.state.text, this.state.checked, this.state.date)
    console.log(add)
    if (add) {
      this.setState({
        text: '',
        checked: false,
        date: this.minDate
      })
    }
  }
  render() {
    return (
      <div>
        <h2>TO DO APP</h2>
        <div className="form">
          <input type="text" name="text" placeholder="dodaj zadanie.." value={this.state.text} onChange={this.handleInput} />
          <input type="checkbox" name="checked" id="important" checked={this.state.checked} onChange={this.handleCheckbox} />
          <label htmlFor="important">Priorytet</label><br />
          <label htmlFor="date">Do kiedy: </label>
          <input type="date" name="date" id="date" value={this.state.date} min={this.minDate} max="2021-12-31" onChange={this.handleDate} /><br />
          <button className="valid" onClick={this.handleAddTask}>Dodaj</button>
        </div>
      </div>
    );
  }
}

export default AddTask;
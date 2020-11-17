import React, { Component } from 'react';
import './App.css';
import AddTask from './AddTask'
import TaskList from './TaskList'

class App extends Component {
  id = 3;
  state = {
    tasks: [
      {
        id: 0,
        text: 'Posprzątać pokój',
        date: '27-03-2020',
        important: false,
        active: true,
        finishDate: null
      },
      {
        id: 1,
        text: 'Założyć sprzęgiełka',
        date: '27-03-2020',
        important: false,
        active: true,
        finishDate: null
      },
      {
        id: 2,
        text: 'Zrobić dobry uczynek',
        date: '27-03-2020',
        important: true,
        active: true,
        finishDate: null
      },
    ]
  }

  finishTask = (id) => {
    console.log(`finish ${id}`)
    const tasks = [...this.state.tasks]
    tasks.forEach(task => {
      if (task.id === id) {
        task.active = false
        task.finishDate = new Date().getTime()
      }
    })
    this.setState({
      tasks
    })
  }

  deleteTask = (id) => {
    console.log(`delete ${id}`)
    const tasks = Array.from(this.state.tasks)
    const index = tasks.findIndex(task => task.id === id)
    tasks.splice(index, 1)
    this.setState({
      tasks
    })
  }
  addTask = (text, checked, date) => {
    const task = {
      id: this.id++,
      text: text,
      date: date,
      important: checked,
      active: true,
      finishDate: null
    }
    console.log(this.id)
    this.setState(prevState => ({
      tasks: prevState.tasks.concat(task)
    }))
    return true;
  }
  render() {
    return (
      <div className="App">
        <AddTask add={this.addTask} />
        <hr />
        <TaskList tasks={this.state.tasks} finish={this.finishTask} delete={this.deleteTask} />
      </div>
    );
  }
}

export default App;

import React from 'react';
import Task from './Task'

const TaskList = (props) => {

  // const tasks = props.tasks.map(task => <Task key={task.id} task={task} finish={props.finish} delete={props.delete} />)
  const active = props.tasks.filter(task => task.active)
  const done = props.tasks.filter(task => !task.active)

  const activeTasks = active.map(task => <Task key={task.id} task={task} finish={props.finish} delete={props.delete} />)
  const doneTasks = done.map(task => <Task key={task.id} task={task} finish={props.finish} delete={props.delete} />)
  return (
    <div>
      <h2>Lista zadań:</h2>
      {activeTasks}
      <hr />
      <h3>Zadania zrobione <em>({doneTasks.length})</em></h3>
      {doneTasks.slice(0, 5)}
    </div>
  );
}

export default TaskList;
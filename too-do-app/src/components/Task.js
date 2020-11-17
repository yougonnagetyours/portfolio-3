import React from 'react';

const Task = (props) => {

  const style = {
    color: 'red'
  }
  const finishDate = new Date(props.task.finishDate).toLocaleString();
  if (props.task.active) {
    return (
      <p>
        <strong style={props.task.important ? style : null}>{props.task.text}</strong> <span>{props.task.date}</span> <button onClick={() => props.finish(props.task.id)}>Zrobione!</button>
        <button onClick={() => props.delete(props.task.id)}>X</button>
      </p>
    );
  }
  if (!props.task.active) {
    return (
      <p>
        <strong>{props.task.text}</strong><em> - cel do: <span>{props.task.date}</span></em> <button onClick={() => props.delete(props.task.id)}>X</button><br />
        <em>- zrobiono {finishDate}</em>
      </p>
    );
  }
}

export default Task;
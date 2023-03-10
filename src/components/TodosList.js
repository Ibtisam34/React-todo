import React from 'react';
import TodoItem from './TodoItem';

const TodosList = (props) => (
  <ul>
    {/* eslint-disable */}
    {props.todos.map((todo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        handleChangeProps={props.handleChangeProps}
        deleteTodoProps={props.deleteTodoProps}
        setUpdate={props.setUpdate}
      />
      /* eslint-enable */
    ))}
  </ul>
);
export default TodosList;
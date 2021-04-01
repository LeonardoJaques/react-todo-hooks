import React, { useContext } from 'react';
import { Paper, List, Divider } from '@material-ui/core';
import Todo from './Todo';
import { TodosContext } from './context/todo.context';

function TodoList() {
  const todos = useContext(TodosContext);
  if (todos.length) {
    return (
      <Paper>
        <List>
          {todos.map((todo, i) => (
            <React.Fragment key={i}>
              <Todo {...todo} key={todo.id} />
              {i < todos.length - 1 && <Divider key={todo.id + 'divider'} />}
            </React.Fragment>
          ))}
        </List>
      </Paper>
    );
  }
  return null;
}

export default TodoList;

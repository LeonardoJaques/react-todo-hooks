import React, { useContext } from 'react';
import { TextField } from '@material-ui/core';
import useInputState from './hooks/useInputState';
import { TodosContext } from './context/todo.context';

function EditTodoForm({ id, task, toggleEditForm }) {
  const { dispatch } = useContext(TodosContext);
  const [value, handleChange, reset] = useInputState(task);
  return (
    <form
      onSubmit={(evt) => {
        evt.preventDefault();
        dispatch({ type: 'EDIT', id: id, newTask: value });
        reset();
        toggleEditForm();
      }}
      style={{ marginLeft: '1rem', width: '100%' }}
    >
      <TextField
        value={value}
        onChange={handleChange}
        margin="normal"
        fullWidth={true}
        autoFocus
      />
    </form>
  );
}

export default EditTodoForm;

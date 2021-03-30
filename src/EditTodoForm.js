import React from 'react';
import { TextField } from '@material-ui/core';
import useInputState from './hooks/useInputState';

function EditTodoForm({ id, editTodo, task, toggleEditForm }) {
  const [value, handleChange, reset] = useInputState(task);

  return (
    <form
      onSubmit={(evt) => {
        evt.preventDefault();
        editTodo(id, value);
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

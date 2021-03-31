import { createContext } from 'react';
import useTodoState from '../hooks/useTodoState';
//todos
// all methos interact with todos
const defaultTodos = [
  { id: 1, task: 'Clean the bags', completed: false },
  { id: 2, task: 'Eat popcorn', completed: true },
  { id: 3, task: 'Feed the cat', completed: false },
];
const TodosContext = createContext();

function TodoProvider(props) {
  const todoActions = useTodoState(defaultTodos);
  return (
    <TodosContext.Provider value={todoActions}>
      {props.children}
    </TodosContext.Provider>
  );
}

export { TodoProvider, TodosContext };

import { createContext, useReducer } from 'react';
import reducer from '../reducers/todo.reducer';

//todos
// all methos interact with todos
const defaultTodos = [
  { id: 1, task: 'Clean the bags', completed: false },
  { id: 2, task: 'Eat popcorn', completed: true },
  { id: 3, task: 'Feed the cat', completed: false },
];
const TodosContext = createContext();
const DispatchContext = createContext();
function TodoProvider(props) {
  const [todos, dispatch] = useReducer(reducer, defaultTodos);
  return (
    <TodosContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </TodosContext.Provider>
  );
}

export { TodoProvider, TodosContext, DispatchContext };

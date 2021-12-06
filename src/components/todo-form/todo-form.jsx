import * as React from 'react';
import { TodosContext } from '../../todo-context';
import './todo-form.scss';

export const TodoForm = () => {
  const { todos, setTodos } = React.useContext(TodosContext);
  const [task, setTask] = React.useState('');

  const getId = () => {
    if (todos.length > 0) {
      const { id: lastItemId } = todos[todos.length - 1];
      return lastItemId + 1;
    }

    return 0;
  };

  const handleAddTodo = () => {
    const whiteSpaceRemoved = task.trim();
    const isFilled = whiteSpaceRemoved.length > 0;

    if (isFilled) {
      const id = getId();

      const newTask = {
        id,
        label: task,
        checked: false,
      };

      setTodos([...todos, newTask]);
    } else {
      const newTask = {
        id: 0,
        label: task,
        checked: false,
      };

      setTodos([...todos, newTask]);
    }

    setTask('');
  };

  const handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      handleAddTodo();
    }
  };

  return (
    <div className="todo-form">
      <input
        placeholder="Enter new task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyUp={handleKeyUp}
      />
      <button type="button" onClick={handleAddTodo}>
        Add task
      </button>
    </div>
  );
};

import * as React from 'react';
import { TodosContext } from '../../todo-context';
import './todo-results.scss';

export const TodoResults = () => {
  const { todos } = React.useContext(TodosContext);
  const [doneTaks, setDoneTasks] = React.useState(0);

  const calculateChecked = () => {
    const doneTasksCount = todos.reduce((acc, curr) => {
      if (curr.checked) { return acc + 1; }
      return acc;
    }, 0);

    setDoneTasks(doneTasksCount);
  };

  React.useEffect(calculateChecked, [todos]);

  return (
    <div className="todo-results">
      Done:
      {doneTaks}
    </div>
  );
};

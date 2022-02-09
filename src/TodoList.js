import React, { useState } from 'react';
import TodoItemFilter from './TodoItemFilter';
import TodoItemCreator from './TodoItemCreator';

function TodoList() {
  const [createMode, setCreateMode] = useState(false);

  const onclick = () => setCreateMode(!createMode);

  return (
    <div className="todoList">
      <h1>TodoList</h1>
      <button className="btn btn-primary" onClick={onclick}>
        {createMode ? 'Back' : 'Add new'}
      </button>
      {createMode ? <TodoItemCreator /> : <TodoItemFilter />}
    </div>
  );
}

export default TodoList;

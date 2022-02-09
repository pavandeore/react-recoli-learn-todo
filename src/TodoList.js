import React, { useState } from 'react';
import TodoItemFilter from './TodoItemFilter';
import TodoItemCreator from './TodoItemCreator';

import { useRecoilValue } from 'recoil';
import { todoListSelectorState } from './selectors';

function TodoList() {
  const [createMode, setCreateMode] = useState(false);
  const todolist = useRecoilValue(todoListSelectorState);

  console.log(todolist);

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

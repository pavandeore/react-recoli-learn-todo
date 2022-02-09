import React, { useState } from 'react';
import { todoListState } from './atoms';
import { useSetRecoilState } from 'recoil';

function TodoItemCreator() {
  const [inputValue, setInputValue] = useState('');
  const setTodoItem = useSetRecoilState(todoListState);

  const onchange = (e) => {
    setInputValue(e.target.value);
  };

  const onclick = () => {
    console.log(inputValue);
    setTodoItem((oldTodo) => {
      return [
        ...oldTodo,
        {
          id: oldTodo.length + 1,
          desc: inputValue,
        },
      ];
    });
    setInputValue('');
  };

  return (
    <div>
      <input
        type="text"
        className="form-control"
        value={inputValue}
        onChange={onchange}
      />
      <button onClick={onclick} className="btn btn-primary">
        save
      </button>
    </div>
  );
}

export default TodoItemCreator;

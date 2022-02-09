import React, { useState } from 'react';
import { todoListState } from './atoms';
import {} from 'recoil';

function TodoItemCreator() {
  const [inputValue, setInputValue] = useState('');

  const onchange = (e) => {
    setInputValue(e.target.value);
  };

  const onclick = () => {
    console.log(inputValue);
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

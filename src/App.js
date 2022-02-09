import React from 'react';
import './style.css';
import TodoList from './TodoList';
import { RecoilRoot } from 'recoil';

export default function App() {
  return (
    <div>
      <RecoilRoot>
        <TodoList />
      </RecoilRoot>
    </div>
  );
}

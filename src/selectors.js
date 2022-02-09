import { selector } from 'recoil';
import { todoListState } from './atoms';

const todoListSelectorState = selector({
  key: 'todoListSelectorState',
  get: ({ get }) => {
    const list = get(todoListState);
    return list;
  },
});

export { todoListSelectorState };

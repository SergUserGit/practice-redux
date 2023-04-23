const { createSlice } = require('@reduxjs/toolkit');

const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo: (state, action) => state.todos.push(action.payload),
    deleteTodo: (state, action) =>
      state.todos.filter(todo => todo.id !== action.payload),
  },
});

export const { addTodo, deleteTodo } = todosSlice.actions;

export default todosSlice.reducer;

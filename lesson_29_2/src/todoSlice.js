import { createSlice } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
    name: "todos",
    initialState: {todos: []},
    reducers: {
        addTodo: (state, {payload}) => {
            state.todos.push(payload);
        }
    }
});

export const {addTodo} = todoSlice.actions;
export default todoSlice.reducer;
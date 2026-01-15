import { createSlice } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
    name: "todos",
    initialState: {
        todos: [],
        isLoading: false
    },
    reducers: {
        addTodo: (state, {payload}) => {
            state.todos.push(payload);
            state.isLoading = false;
        },
        fetchTodos: (state, {payload}) => {
            state.todos = payload;
            state.isLoading = false;
        },
        deleteTodo: (state, {payload}) => {
            const index = state.todos.findIndex((todo) => todo.id === payload);
            state.todos.splice(index, 1);
            state.isLoading = false;
        },
        updateTodo: (state, {payload}) => {
            const index = state.todos.findIndex((todo) => todo.id === payload.id);
            state.todos.splice(index, 1, payload);
            state.isLoading = false;
        },
        setLoading: (state, {payload}) => {
            state.isLoading = payload;
        },
        deleteTodoAction: (state) => {
            state.isLoading = true;
        },
        changeTodoStatus: (state) => {},
        updateTodoAction: (state) => {
            state.isLoading = true;
        },
        addItem: (state) => {
            state.isLoading = true;
        },
        // clearTodos: (state) => {
        //     state.todos = []
        // }
    }
});

export const {addTodo,
    deleteTodo,
    // clearTodos,
    setLoading,
    fetchTodos,
    deleteTodoAction,
    changeTodoStatus,
    updateTodo,
    addItem,
    updateTodoAction
} = todoSlice.actions;

export default todoSlice.reducer;
const express = require('express');
const TodoService = require('./services/TodoService');
const mongoose = require('mongoose');
const cors = require('cors');
const todoModel = require('./models/todo.model');

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://mongoadmin:123456789@127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.5.8')
    .then(() => console.log('MongoDB Connected!'))
    .catch(err => console.log(err));

const todoService = new TodoService(todoModel);

app.post('/api/todo/create', todoService.createTodo);
app.get('/api/todo', todoService.getTodoById);
app.get('/api/todos', todoService.getAllTodos);
app.put('/api/todo/update', todoService.updateTodo);
app.delete('/api/todo/delete', todoService.deleteTodo);

app.listen(8080, () => console.log('Server is running on port 8080!'));
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Button, Form, Spinner} from "react-bootstrap";
import {changeTodoStatus, deleteTodoAction, setLoading, updateTodoAction} from "../redux/todoSlice.js";
import {Delete, ModeEdit} from "@mui/icons-material";
import {useFormik} from "formik";

const TodoList = () => {

    const dispatch = useDispatch();

    const todos = useSelector(state => state.todos.todos);
    const isLoading = useSelector(state => state.todos.isLoading);

    const [updateCandidateTodo, setUpdateCandidateTodo] = useState(undefined);

    useEffect(() => {
        dispatch(setLoading(true));
    }, []);

    const onSubmit = (values) => {
        dispatch(updateTodoAction({...updateCandidateTodo, ...values}));
        setUpdateCandidateTodo(undefined);
    }

    const formik = useFormik({
        initialValues: {name: "test"},
        onSubmit: onSubmit
    });

    useEffect(() => {
        if (updateCandidateTodo) {
            formik.setFieldValue('name', updateCandidateTodo ? updateCandidateTodo.name : "");
        }
    }, [updateCandidateTodo]);

    return (
        <div>
            {isLoading ?
                <div className="d-flex justify-content-center align-items-center">
                    <Spinner animation="border" variant="primary" className="mt-2"/>
                </div>
                :
                <div className="d-flex justify-content-center align-items-center flex-column">
                    {todos.map((todoItem) => (
                        <div className="w-25" key={todoItem.id}>
                            <div className="mt-2 bg-light p-3 rounded d-flex align-items-center justify-content-between">
                                <div className="d-flex align-items-center gap-2">
                                    <Form.Check aria-label="option 1" onChange={() => dispatch(changeTodoStatus({...todoItem, done: !todoItem.done}))} checked={todoItem.done}/>
                                    <p>{todoItem.name}</p>
                                </div>
                                <div className="d-flex align-items-center gap-2">
                                    <Button variant="success" onClick={() => setUpdateCandidateTodo(updateCandidateTodo ? undefined : todoItem)}><ModeEdit /></Button>
                                    <Button variant="danger" onClick={() => dispatch(deleteTodoAction(todoItem.id))}><Delete /></Button>
                                </div>
                            </div>
                            {updateCandidateTodo && todoItem.id === updateCandidateTodo.id ?
                                <div className="p-3">
                                    <Form noValidate className="d-flex gap-2" onSubmit={formik.handleSubmit}>
                                        <Form.Group>
                                            <Form.Control
                                                type="text"
                                                name="name"
                                                placeholder="Назва задачі"
                                                onChange={formik.handleChange}
                                                value={formik.values.name}
                                                className="form__input js--form__input form-control"
                                            />
                                        </Form.Group>
                                        <Button variant="primary" type="submit">Оновити</Button>
                                    </Form>
                                </div>
                                :
                                null
                            }
                        </div>
                    ))}
                </div>
            }
        </div>
    );
};

export default TodoList;
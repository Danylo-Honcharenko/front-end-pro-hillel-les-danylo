import React from 'react';
import {Button, Form} from "react-bootstrap";
import {useFormik} from "formik";
import {useDispatch} from "react-redux";
import {addTodo} from "../redux/todoSlice.js";

const TodoForm = () => {

    const dispatch = useDispatch();

    const onSubmit = (values, {resetForm}) => {
        dispatch(addTodo(values));
        resetForm();
    }

    const formik = useFormik({
        initialValues: {taskName: ""},
        onSubmit: onSubmit
    });

    return (
        <div className="d-flex justify-content-center">
            <Form noValidate className="d-flex flex-column w-25 gap-2" onSubmit={formik.handleSubmit}>
                <Form.Group>
                    <Form.Control
                        type="text"
                        name="taskName"
                        placeholder="Задача"
                        onChange={formik.handleChange}
                        value={formik.values.taskName}
                        className="form__input js--form__input form-control"
                    />
                </Form.Group>
                <Button variant="primary" type="submit">Додати</Button>
            </Form>
        </div>
    );
};

export default TodoForm;
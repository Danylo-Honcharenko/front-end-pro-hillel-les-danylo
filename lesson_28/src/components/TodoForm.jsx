import React, {useContext} from 'react';
import {Button, Form} from "react-bootstrap";
import * as yup from 'yup';
import {Formik} from "formik";
import {TodoListContext} from "../todoContext.js";

const TodoForm = () => {

    const [todo, setTodo] = useContext(TodoListContext);

    const validateSchema = yup.object().shape({
        taskName: yup.string()
            .required("Обов'язкове поле!")
            .min(5, "Назва завдання має складатися щонайменше з 5 символів!")
    });

    const onSubmit = (values, { resetForm }) => {
        setTodo([...todo, {todoName: values.taskName}]);
        resetForm();
    }

    return (
        <Formik
            initialValues={{taskName: ""}}
            onSubmit={onSubmit}
            validationSchema={validateSchema}
        >
            {({ handleSubmit, handleChange, values, errors }) => (
                <Form noValidate className="d-flex flex-column gap-2" onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Control
                        type="text"
                        name="taskName"
                        placeholder="Задача"
                        onChange={handleChange}
                        value={values.taskName}
                        isInvalid={!!errors.taskName}
                        className="form__input js--form__input form-control"
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.taskName ?? null}
                    </Form.Control.Feedback>
                </Form.Group>
                <Button variant="primary" type="submit">Додати</Button>
            </Form>
            )}
        </Formik>
    );
};

export default TodoForm;
import { call, put, takeEvery, all} from 'redux-saga/effects'
import {
    addItem,
    addTodo,
    changeTodoStatus,
    deleteTodo,
    deleteTodoAction,
    fetchTodos,
    setLoading,
    updateTodo, updateTodoAction
} from "./todoSlice.js";

const API_URL = "https://6967ee50bbe157c088b36053.mockapi.io/todo";

const fetchHelper = (url, options) => {
    return fetch(url, options).then(response => {
        if (!response.ok) {
            throw Error("Http error!");
        }

        return response.json();
    });
}

function* fetchTodoSaga() {
    try {
        const response = yield call(fetchHelper, API_URL);
        yield put(fetchTodos(response));
    } catch (error) {
        console.log("Error ", error);
    }
}

function* deleteTodoSaga({payload}) {
    try {
        yield call(fetchHelper, `${API_URL}/${payload}`, {
            method: "DELETE"
        });
        yield put(deleteTodo(payload));
    } catch (error) {
        console.log("Error ", error);
    }
}

function* updateTodoSaga({payload}) {
    try {
        const response = yield call(fetchHelper, `${API_URL}/${payload.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload)
        });
        yield put(updateTodo(response));
    } catch (error) {
        console.log("Error ", error);
    }
}

function* addTodoSaga({payload}) {
    try {
        const response = yield call(fetchHelper, API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload)
        });
        yield put(addTodo(response));
    } catch (error) {
        console.log("Error ", error);
    }
}

function* watchDeleteTodo() {
    yield takeEvery(deleteTodoAction.type, deleteTodoSaga);

}

function* watchFetchTodos() {
    yield takeEvery(setLoading.type, fetchTodoSaga);
}

function* watchChangeTodoStatus() {
    yield takeEvery(changeTodoStatus.type, updateTodoSaga);
}

function* watchAddTodo() {
    yield takeEvery(addItem.type, addTodoSaga);
}

function* watchUpdateTodo() {
    yield takeEvery(updateTodoAction.type, updateTodoSaga);
}

export default function* rootSaga() {
    yield all([
        watchFetchTodos(),
        watchDeleteTodo(),
        watchChangeTodoStatus(),
        watchAddTodo(),
        watchUpdateTodo()
    ]);
}
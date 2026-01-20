import {render, screen, fireEvent, act} from "@testing-library/react";
import App from "../App.jsx";

describe('App', () => {
    beforeEach(() => render(<App />));

    test('have title', () => {
        expect(screen.getByText('TodoList')).toBeInTheDocument();
    });

    test('test input string', async () => {
        const input = screen.getByPlaceholderText("Задача");

        await act(async () => {
            fireEvent.change(input, { target: { value: "test" } });
        })

        expect(input.value).toBe("test");
    });

    test('test input numbers', async () => {
        const input = screen.getByPlaceholderText("Задача");
        await act(async () => {
            fireEvent.change(input, { target: { value: 1234 } });
        })
        expect(input.value).toBe("1234");
    });

    test('test button add', async () => {
        const addButton = screen.getByText("Додати");
        await act(async () => {
            addButton.click();
        })
        expect(screen.getByText("Обов'язкове поле!")).toBeInTheDocument();
    });

    test('test button add item to list', async () => {
        const input = screen.getByPlaceholderText("Задача");
        const addButton = screen.getByText("Додати");

        await act(async () => {
            fireEvent.change(input, { target: { value: "test1234" } });
            addButton.click();
        })

        expect(screen.getByText("test1234")).toBeInTheDocument();
    });

    test('test min number of character is 5', async () => {
        const input = screen.getByPlaceholderText("Задача");
        const addButton = screen.getByText("Додати");

        await act(async () => {
            fireEvent.change(input, { target: { value: "test" } });
            addButton.click();
        })

        expect(screen.getByText("Назва завдання має складатися щонайменше з 5 символів!")).toBeInTheDocument();
    });
});
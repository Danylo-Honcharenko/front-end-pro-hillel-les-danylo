import React, {useContext} from 'react';
import {ThemeContext} from "../themeContext.js";

const Main = () => {

    const [themeState] = useContext(ThemeContext);

    const todos = [
        "Todo 1",
        "Todo 2",
        "Todo 3",
        "Todo 4"
    ];

    return (
        <div className="pt-2 pb-2 pl-20 pr-20 flex flex-col gap-3">
            <div className="text-center">
                <h1 className={`${themeState.text.style} text-2xl`}>TodoList</h1>
            </div>
            <div>
                <form className="flex gap-2 justify-center">
                    <label>
                        <input
                            className="placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 focus:outline-none focus:border-slate-400 w-96 bg-white"
                        />
                    </label>
                    <button type="submit" className={`${themeState.button.style} p-2 rounded-lg cursor-pointer`}>Додати</button>
                </form>
            </div>
            <div className="flex justify-center">
                <ul className="w-96">
                    {todos.map((todo, index) => (
                        <li className={`${themeState.container.style} mt-2 p-3 rounded-lg`} key={index}>{todo}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Main;
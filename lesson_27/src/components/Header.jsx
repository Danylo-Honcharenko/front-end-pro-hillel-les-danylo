import React, {useContext, useEffect} from 'react';
import {theme, ThemeContext} from "../themeContext.js";
import {NavLink} from "react-router";

const Header = () => {

    const [themeState, setThemeState] = useContext(ThemeContext);

    const menuItems = [
        {text: "Головна", link: "/"},
        {text: "Контакти", link: "/contact"},
        {text: "Про мене", link: "/about-me"},
    ];

    const changeTheme = () => {
        setThemeState(themeState.themeName === "default" ? theme.dark : theme.default);
    }

    useEffect(() => {
        if (document.body.className.includes(theme.default.body.style)) {
            document.body.classList.remove(theme.default.body.style);
        }
        if (document.body.className.includes(theme.dark.body.style)) {
            document.body.classList.remove(theme.dark.body.style);
        }
        document.body.classList.add(themeState.body.style);
    }, [themeState]);

    return (
        <header className={`${themeState.header.style} pt-2 pb-2 pl-20 pr-20 flex justify-between items-center`}>
            <div>
                <h1 className={`${themeState.text.style} text-xl`}>Гончаренко Д.Д.</h1>
            </div>
            <div className="flex gap-6 items-center">
                <div>
                    <ul className="flex gap-3">
                        {menuItems.map((item, index) => (
                            <li key={index} className={themeState.text.style}><NavLink to={item.link}>{item.text}</NavLink></li>
                        ))}
                    </ul>
                </div>
                <div>
                    <button className={`${themeState.button.style} p-2 rounded-lg cursor-pointer`} onClick={changeTheme}>Змінити тему</button>
                </div>
            </div>
        </header>
    );
};

export default Header;
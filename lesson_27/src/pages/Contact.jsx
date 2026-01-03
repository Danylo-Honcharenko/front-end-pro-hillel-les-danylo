import React, {useContext} from 'react';
import {ThemeContext} from "../../themeContext.js";

const Contact = () => {

    const [themeState] = useContext(ThemeContext);

    return (
        <div className={`${themeState.text.style} pt-2 pb-2 pl-20 pr-20 text-center`}>
            <h1 className="text-2xl">Контакты</h1>
            <div>
                <p>Телефон <a href="tel: +3809999999999">+3809999999999</a></p>
                <p>Email <a href="mailto: test.test@gmail.com">test.test@gmail.com</a></p>
            </div>
        </div>
    );
};

export default Contact;
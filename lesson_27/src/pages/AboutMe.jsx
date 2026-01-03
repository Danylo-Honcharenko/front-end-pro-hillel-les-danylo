import React, {useContext} from 'react';
import {ThemeContext} from "../../themeContext.js";

const AboutMe = () => {
    const [themeState] = useContext(ThemeContext);

    return (
        <div className={`${themeState.text.style} pt-2 pb-2 pl-20 pr-20 text-center`}>
            <h1 className="text-2xl">Про мене</h1>
            <p>Я такий то такий. Зробив то і то. І всео</p>
        </div>
    );
};

export default AboutMe;
import React, {useContext} from 'react';
import {ThemeContext} from "../../themeContext.js";

const Footer = () => {
    const [themeState] = useContext(ThemeContext);
    return (
        <footer className={`${themeState.footer.style} ${themeState.text.style} fixed left-0 right-0 bottom-0 w-full pt-2 pb-2 pl-20 pr-20 flex items-center gap-4 `}>
            <div>
                <h1 className="text-xl">Гончаренко Д.Д.</h1>
            </div>
            <div>
                <p>Git: <a href="https://github.com/Danylo-Honcharenko">https://github.com/Danylo-Honcharenko</a></p>
            </div>
        </footer>
    );
};

export default Footer;
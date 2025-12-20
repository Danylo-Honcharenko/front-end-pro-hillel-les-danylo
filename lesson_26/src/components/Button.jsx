import React from 'react';

const Button = (props) => {
    const {children, onClick} = props;
    return (
        <button className="bg-blue-500 p-2 text-white rounded-lg cursor-pointer" onClick={onClick}>{children}</button>
    );
};

export default Button;
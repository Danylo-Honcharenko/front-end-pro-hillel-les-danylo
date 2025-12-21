import React from 'react';

const Smile = (props) => {
    const {id, clickAmount, onClick} = props;
    return (
        <div className="flex items-center flex-col p-0.5 rounded-lg hover:bg-gray-200" onClick={onClick}>
            <img src={`/smiles/${id}.svg`} alt={`Smile-${id}`} width="50px"/>
            <p>{clickAmount}</p>
        </div>
    );
};

export default Smile;
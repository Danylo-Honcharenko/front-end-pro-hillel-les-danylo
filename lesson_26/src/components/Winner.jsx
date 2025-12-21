import React from 'react';

const Winner = (props) => {
    const {id, clickAmount} = props;
    return (
        <div className="text-center">
            <h1>Результати голосування:</h1>
            <p>Переможець:</p>
            <img src={`/smiles/${id}.svg`} alt="Smile" width="50px" className="block m-auto"/>
            <p>Кількість голосів: {clickAmount}</p>
        </div>
    );
};

export default Winner;
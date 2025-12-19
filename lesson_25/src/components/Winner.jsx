import {Component} from "react";

export default class Winner extends Component {
    render() {
        const {id, clickAmount} = this.props;
        return (
            <div className="text-center">
                <h1>Результати голосування:</h1>
                <p>Переможець:</p>
                <img src={`/smiles/${id}.svg`} alt="Smile" width="50px" className="block m-auto"/>
                <p>Кількість голосів: {clickAmount}</p>
            </div>
        );
    }
}
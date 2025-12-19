import {Component} from "react";

export default class Smile extends Component {
    render() {
        const {id, clickAmount, onClick} = this.props;
        return (
            <div className="flex items-center flex-col p-0.5 rounded-lg hover:bg-gray-200" onClick={onClick}>
                <img src={`/smiles/${id}.svg`} alt={`Smile-${id}`} width="50px"/>
                <p>{clickAmount}</p>
            </div>
        );
    }
}
import {Component} from "react";

export default class Button extends Component {
    render() {
        const {children, onClick} = this.props;
        return (
          <button className="bg-blue-500 p-2 text-white rounded-lg cursor-pointer" onClick={onClick}>{children}</button>
        );
    }
}
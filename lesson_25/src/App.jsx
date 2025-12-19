import './App.css'
import {Component} from "react";
import Smile from "./components/Smile.jsx";
import Winner from "./components/Winner.jsx";
import Button from "./components/Button.jsx";

export default class App extends Component {
    state = {
        smilesCounters: [
            {id: 1, clickAmount: 0},
            {id: 2, clickAmount: 0},
            {id: 3, clickAmount: 0},
            {id: 4, clickAmount: 0},
            {id: 5, clickAmount: 0}
        ],
        showResults: false,
        winner: {}
    }

    addClick = (id) => {
        const smileCounter = this.state.smilesCounters.find((smileCount) => smileCount.id === id)
        if (smileCounter) {
            smileCounter.clickAmount += 1;
            this.setState({...this.state});
            localStorage.setItem("smilesCounters", JSON.stringify(this.state.smilesCounters))
        }
    }

    componentDidMount() {
        const smilesCounters = localStorage.getItem("smilesCounters");
        if (smilesCounters) {
            this.setState({...this.state, smilesCounters: JSON.parse(smilesCounters)});
        }
    }

    showWinner = () => {
        const winner = this.state.smilesCounters.reduce((prev, current) => {
            return (prev.clickAmount > current.clickAmount) ? prev : current;
        });
        this.setState({...this.state, showResults: true, winner: winner});
    }

    clearResults = () => {
        this.state.smilesCounters.forEach((smile) => smile.clickAmount = 0);
        this.setState({...this.state});
        localStorage.setItem("smilesCounters", JSON.stringify(this.state.smilesCounters));
    }

    render() {

        const {smilesCounters, winner, showResults} = this.state;

        return (
            <div className="flex flex-col justify-center items-center mt-3">
                <h1 className="font-bold">Голосування за найкращий смайлик</h1>
                <div className="flex items-center gap-3 mt-2">
                    {smilesCounters.map(({id, clickAmount}) => (
                        <Smile key={id} id={id} clickAmount={clickAmount} onClick={() => this.addClick(id)} />
                    ))}
                </div>
                <div className="mt-3 flex gap-3">
                    <Button onClick={() => this.showWinner()}>Показати результат</Button>
                    <Button onClick={() => this.clearResults()}>Очистити результати</Button>
                </div>
                {showResults ?
                    <Winner id={winner.id} clickAmount={winner.clickAmount}/>
                    :
                    null
                }
            </div>
        );
    }
}
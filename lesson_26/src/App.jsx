import './App.css'
import {useEffect, useState} from "react";
import Smile from "./components/Smile.jsx";
import Button from "./components/Button.jsx";
import Winner from "./components/Winner.jsx";

function App() {

    const initialState = [
        {id: 1, clickAmount: 0},
        {id: 2, clickAmount: 0},
        {id: 3, clickAmount: 0},
        {id: 4, clickAmount: 0},
        {id: 5, clickAmount: 0}
    ];

    const [smilesCounters, setSmilesCounters] = useState(initialState);
    const [showResults, setShowResults] = useState(false);
    const [winner, setWinner] = useState({});

    useEffect(() => {
        const smilesCounters = localStorage.getItem("smilesCounters");
        if (smilesCounters) {
            setSmilesCounters(JSON.parse(smilesCounters));
        }
    }, []);

    const addClick = (id) => {
        const smileCounter = smilesCounters.find((smileCount) => smileCount.id === id)
        if (smileCounter) {
            smileCounter.clickAmount += 1;
            setSmilesCounters([...smilesCounters]);
            localStorage.setItem("smilesCounters", JSON.stringify(smilesCounters));
        }
    }

    const showWinner = () => {
        const winner = smilesCounters.reduce((prev, current) => {
            return (prev.clickAmount > current.clickAmount) ? prev : current;
        });
        setWinner(winner);
        setShowResults(true);
    }

    const clearResults = () => {
        setSmilesCounters(initialState);
        localStorage.setItem("smilesCounters", JSON.stringify(initialState));
    }

    return (
        <div className="flex flex-col justify-center items-center mt-3">
            <h1 className="font-bold">Голосування за найкращий смайлик</h1>
            <div className="flex items-center gap-3 mt-2">
                {smilesCounters.map(({id, clickAmount}) => (
                    <Smile key={id} id={id} clickAmount={clickAmount} onClick={() => addClick(id)} />
                ))}
            </div>
            <div className="mt-3 flex gap-3">
                <Button onClick={() => showWinner()}>Показати результат</Button>
                <Button onClick={() => clearResults()}>Очистити результати</Button>
            </div>
            {showResults ?
                <Winner id={winner.id} clickAmount={winner.clickAmount}/>
                :
                null
            }
        </div>
    );
}

export default App;

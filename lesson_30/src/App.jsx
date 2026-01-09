import RequestFrom from "./components/RequestFrom.jsx";
import ResponseBlock from "./components/ResponseBlock.jsx";
import {useDispatch} from "react-redux";
import {setData} from "./redux/swapiSlice.js";

function App() {

    const dispatch = useDispatch();

    return (
        <div className="container">
            <RequestFrom/>
            <ResponseBlock/>
            <button className="btn btn-warning mt-2" onClick={() => dispatch(setData(undefined))}>Clear</button>
        </div>
    );
}

export default App;

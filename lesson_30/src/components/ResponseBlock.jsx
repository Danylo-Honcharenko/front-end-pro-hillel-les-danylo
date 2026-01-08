import React from 'react';
import {useSelector} from "react-redux";

const ResponseBlock = () => {

    const swapiResponse = useSelector((state) => state.swapi.data);
    const isLoading = useSelector((state) => state.swapi.isLoading);

    return (
        <div className="card">
            <div className="card-body">
                <span className="badge d-none bg-secondary js--swapi_controller">people</span>
                <span className="badge d-none bg-secondary js--swapi_id">1</span>
                {isLoading ? <div className="load js--swapi_load">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div> :
                null}
                <pre className="mt-2 mb-0 js--swapi_pre">{swapiResponse !== undefined ? <code>{JSON.stringify(swapiResponse, null, 2)}</code> : null}</pre>
            </div>
        </div>
    );
};

export default ResponseBlock;
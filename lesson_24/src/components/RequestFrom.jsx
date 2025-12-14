import React from 'react';

const RequestFrom = () => {
    return (
        <div>
            <h1>SWAPI</h1>
            <form action="" className="input-group mb-3 js--swapi_form">
                <span className="input-group-text" id="basic-addon3">https://www.swapi.tech/api/</span>
                <input type="text" name="url" className="form-control js--swapi_input" id="basic-url"
                       placeholder="people/1/" aria-describedby="basic-addon3"/>
                <button className="btn btn-outline-secondary" type="submit" id="button-addon2">Get info</button>
            </form>
        </div>
    );
};

export default RequestFrom;
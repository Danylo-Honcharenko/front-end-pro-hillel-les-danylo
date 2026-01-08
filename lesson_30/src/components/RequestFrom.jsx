import React from 'react';
import {useFormik} from "formik";
import {useDispatch} from "react-redux";
import {fetchData} from "../redux/swapiSlice.js";

const RequestFrom = () => {

    const dispatch = useDispatch();

    const onSubmit = (values, {resetForm}) => {
        dispatch(fetchData(values.url));
        resetForm();
    }

    const formik = useFormik({
        initialValues: {url: ""},
        onSubmit: onSubmit
    });

    return (
        <div>
            <h1>SWAPI</h1>
            <form action="" className="input-group mb-3 js--swapi_form" onSubmit={formik.handleSubmit}>
                <span className="input-group-text" id="basic-addon3">https://www.swapi.tech/api/</span>
                <input type="text" name="url" className="form-control js--swapi_input" id="basic-url"
                       placeholder="people/1/" aria-describedby="basic-addon3" onChange={formik.handleChange}/>
                <button className="btn btn-outline-secondary" type="submit" id="button-addon2">Get info</button>
            </form>
        </div>
    );
};

export default RequestFrom;
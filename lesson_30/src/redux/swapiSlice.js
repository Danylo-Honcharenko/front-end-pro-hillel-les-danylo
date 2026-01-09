import {createSlice} from "@reduxjs/toolkit";

export const swapiSlice = createSlice({
    name: "swapi",
    initialState: {
        data: undefined,
        isLoading: false
    },
    reducers: {
        setData: (state, {payload}) => {
            state.data = payload;
            state.isLoading = false;
        },
        setLoading: (state, {payload}) => {
            state.isLoading = payload;
        }
    }
})

export const {setData, setLoading} = swapiSlice.actions;

export default swapiSlice.reducer;

export const fetchData = (url) => async (dispatch) => {
    dispatch(setLoading(true));
    try {
        const response = await fetch(`https://www.swapi.tech/api/${url}`);
        const data = await response.json();
        dispatch(setData(data));
    } catch (error) {
        console.log(error);
        dispatch(setLoading(false));
    }
}
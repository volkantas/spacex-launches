import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    launches: [],
    searchName: '',
    selectedLaunch: null,
    page: 0,
}

const launchesSlice = createSlice({
    name: 'launches',
    initialState,
    reducers: {
        setPage: (state, action) => {
            state.page = action.payload;
        },
        setSearchName: (state, action) => {
            state.searchName = action.payload;
        },
    }
});

export const {setSearchName, setPage} = launchesSlice.actions;
export default launchesSlice.reducer;

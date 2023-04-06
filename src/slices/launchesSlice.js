import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    launches: [],
    searchQuery: '',
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
        setSearchQuery: (state, action) => {
            state.searchQuery = action.payload;
        },
    }
});

export const {setSearchQuery, setPage} = launchesSlice.actions;
export default launchesSlice.reducer;

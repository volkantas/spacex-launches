import React, {useState} from 'react';
import './App.css';
import SearchForm from './components/SearchForm/SearchForm';
import LaunchList from './components/LaunchList/LaunchList';
import LaunchDetail from './components/LaunchDetail/LaunchDetail';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
    const [launches, setLaunches] = useState([]);
    const [selectedLaunch, setSelectedLaunch] = useState(null);

    const handleSearch = (searchResults) => {
        setLaunches(searchResults);
    };

    const handleSelectLaunch = (launch) => {
        setSelectedLaunch(launch);
    };

    return (
        <BrowserRouter basename="/spacex-launches">
            <div className="App">
                <Routes>
                    <Route exact path="/" element={
                        <React.Fragment>
                            <SearchForm onSearch={handleSearch}/>
                            <LaunchList launches={launches} onSelectLaunch={handleSelectLaunch}/>
                        </React.Fragment>
                    }>
                    </Route>
                    <Route path="/launch/:id" element={<LaunchDetail launch={selectedLaunch}/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;

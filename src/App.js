import React from 'react';
import './App.scss';
import SearchForm from './components/SearchForm/SearchForm';
import LaunchList from './components/LaunchList/LaunchList';
import LaunchDetail from './components/LaunchDetail/LaunchDetail';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
    return (
        <BrowserRouter basename="/spacex-launches">
            <div className="layout">
                <Routes>
                    <Route exact path="/" element={
                        <React.Fragment>
                            <SearchForm/>
                            <LaunchList/>
                        </React.Fragment>
                    }>
                    </Route>
                    <Route path="/launch/:id" element={<LaunchDetail/>}/>
                </Routes>
                <footer>
                    © 2023 Space and Stars. This year has been a remarkable year for exciting discoveries and achievements in space and the stars.
                    <a href="https://www.linkedin.com/in/volkantas/">https://www.linkedin.com/in/volkantas/</a>
                </footer>
            </div>
        </BrowserRouter>
    );
}

export default App;

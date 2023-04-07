import React from 'react';
import './App.scss';
import SearchForm from './components/SearchForm/SearchForm';
import LaunchList from './components/LaunchList/LaunchList';
import LaunchDetail from './components/LaunchDetail/LaunchDetail';
import {HashRouter, Routes, Route} from 'react-router-dom';

function App() {
    return (
        <HashRouter basename="/">
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
                    <a href="https://github.com/volkantas/spacex-launches/">Github Page: https://github.com/volkantas/spacex-launches/</a>
                    <a href="https://www.linkedin.com/in/volkantas/">LinkedIn: https://www.linkedin.com/in/volkantas/</a>
                </footer>
            </div>
        </HashRouter>
    );
}

export default App;

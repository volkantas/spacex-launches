import React, {useEffect, useState} from 'react';
import {setSearchQuery, setPage} from "../../slices/launchesSlice";
import {useDispatch, useSelector} from 'react-redux';
import './SearchForm.scss';
import {FaAngleLeft, FaAngleRight, FaSearch} from 'react-icons/fa';
import {useGetLaunchesQuery} from "../../services/launches";

const SearchForm = () => {
    const [name, setName] = useState('');
    const dispatch = useDispatch();
    const page = useSelector((state) => state.launches.page)
    const { data: launches, isLoading } = useGetLaunchesQuery(page);

    if (isLoading) {
        return null;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(setSearchQuery(name));
    };

    return (
        <div className="wrap">
            <form className="form" onSubmit={handleSubmit}>
                <div className="search">
                    <input type="text" className="searchTerm" placeholder="Which mission you are looking for?"/>
                    <button type="submit" className="searchButton">
                        <FaSearch />
                    </button>
                </div>
                <button disabled={!launches.hasPrevPage} onClick={() => dispatch(setPage(page - 1))} type="button" className="backButton">
                    <FaAngleLeft />
                </button>
                <button disabled={!launches.hasNextPage} onClick={() => dispatch(setPage(page + 1))} type="button" className="forwardButton">
                    <FaAngleRight />
                </button>
            </form>
        </div>
    );
};

export default SearchForm;
import React, {useEffect, useState} from 'react';
import {setSearchName, setPage} from "../../slices/launchesSlice";
import {useDispatch, useSelector} from 'react-redux';
import './SearchForm.scss';
import {FaAngleLeft, FaAngleRight, FaSearch} from 'react-icons/fa';
import {launchesApi, useGetLaunchesQuery} from "../../services/launches";

const SearchForm = () => {
    const [name, setName] = useState('');
    const dispatch = useDispatch();
    const {page, searchName} = useSelector((state) => state.launches)
    const { data: launches, isLoading } = useGetLaunchesQuery({ name: searchName, page });

    if (isLoading || !launches) {
        return null;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(setSearchName(name));
    };

    return (
        <div className="wrap">
            <form className="form" onSubmit={handleSubmit}>
                <div className="search">
                    <input type="text" onChange={e => setName(e.target.value)} className="searchTerm" placeholder="Which mission you are looking for?"/>
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
import React from 'react';

const SearchBar = (props) => {
    return (
        <div className="form-group input-group input-group-lg">
            <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroup-sizing-lg">Search</span>
            </div>
            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"></input>
        </div>
    );
};

export default SearchBar;
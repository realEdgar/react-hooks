import React from 'react'

const Search = ({ search, searchInput, handleSearch }) => {
    return (
        <div className="container__input">
            <input id="searcher" type="text" value={search} ref={searchInput} onChange={ handleSearch } placeholder="Search" />
        </div>
    )
}

export default Search;
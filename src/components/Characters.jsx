import React, { useState, useEffect, useReducer, useMemo } from 'react';
import '../styles/characters.css';

const API_RICK = 'https://rickandmortyapi.com/api/character/'

const initialState = {
    favorites: []
}

const favoriteReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TO_FAVORITE':
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            };
        default:
            return state;
    }
}

export const Characters = () => {
    const [ characters, setCharacters ] = useState([]);
    const [ favorites, dispatch ] = useReducer(favoriteReducer, initialState);
    const [ search, setSearch ] = useState('');

    useEffect(() => {
        fetch(API_RICK)
            .then(response => response.json())
            .then(data => setCharacters(data.results))
            .catch(error => console.error(new Error(error)))
    }, [])

    const handleSearch = (ev) => {
        return setSearch(ev.target.value);
    }

    const handleClick = (favorite) => {
        dispatch({ type: 'ADD_TO_FAVORITE', payload: favorite });
    }

    // const filteredUsers = characters.filter((user) => {
    //     return user.name.toLowerCase().includes(search.toLowerCase());
    // });

    //=== Using useMemo ===//

    const filteredUsers = useMemo(() => 
        characters.filter((user) => {
            return user.name.toLowerCase().includes(search.toLowerCase());
    }), 
        [ characters, search ]
    );

    return (        
        <div className="container__characters" >
            <div className="container__input">
                <input id="searcher" type="text" value={search} onChange={ handleSearch } placeholder="Search" />
            </div>
            <div>
                <h2>Lista de mis favoritas</h2>
                <div className="favorites">
                    {favorites.favorites.map(favorite => (
                        <article key={favorite.id} className="article">
                            <figure className="article__image">
                                <img src={favorite.image} alt={favorite.name} />
                            </figure>
                            <div className="article__details">
                                <h2 className="article__name">Name: {favorite.name}</h2>
                                <p className="article__status">Status: {favorite.status}</p>  
                            </div>
                        </article>
                    ))}
                </div>                
            </div>
            <div className="characters">
                {filteredUsers.map((character) => (
                    <article key={character.id} className="article">
                        <figure className="article__image">
                            <img src={character.image} alt={character.name} />
                        </figure>
                        <div className="article__details">
                            <h2 className="article__name">Name: {character.name}</h2>
                            <p className="article__status">Status: {character.status}</p>  
                        </div>
                        <button type="button" onClick={ () => handleClick(character) }>Add to Favorites</button>
                    </article>)            
                )}    
            </div>                      
        </div>
    )
}
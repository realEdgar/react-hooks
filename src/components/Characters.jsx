import React, { useState, useEffect} from 'react';
import '../styles/characters.css';

export const Characters = () => {
    const [ characters, setCharacters ] = useState([]);

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character/')
            .then(response => response.json())
            .then(data => setCharacters(data.results))
            .catch(error => console.error(new Error(error)))
    }, [])
    return (
        <div className="characters">
            {characters.map((character) => {
                return(
                <article key={character.id} className="article">
                    <figure className="article__image">
                        <img src={character.image} alt={character.name} />
                    </figure>
                    <div className="article__details">
                        <h2 className="article__name">Character: {character.name}</h2>
                        <p className="article__status">Status: {character.status}</p>  
                    </div>
                    
                </article>);                
            })}            
        </div>
    )
}
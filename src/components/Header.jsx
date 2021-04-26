import React, { useState, useContext } from 'react';
import ThemeContext from "../context/ThemContext";

export const Header = () => {
    const [ darkMode, setDarkMode ] = useState(false);
    const color = useContext(ThemeContext)

    //===== Creating a function to handle the click of the button =====//
    function handleClick() {
        const articles = document.querySelectorAll('article');
        const body = document.querySelector('body');
        const button = document.querySelectorAll('button');
        const search = document.querySelector('.container__input');
        const searcher = document.getElementById('searcher');
        
        if(!darkMode) {
            body.classList.add('dark-mode');
            search.style.border = '2px solid white';
            searcher.style.color = 'white';
            for(let i = 0; i < articles.length; i++) {
                articles[i].style.border = '2px solid white';
            }
            for(let i = 0; i < button.length; i++) {
                button[i].style.border = '2px solid white';
                button[i].style.color = 'white';
            }
        } else {
            body.classList.remove('dark-mode');
            search.style.border = '2px solid black';
            searcher.style.color = 'black';
            for (let i = 0; i < articles.length; i++) {
                articles[i].style.border = '2px solid black';
            }
            for(let i = 0; i < button.length; i++) {
                button[i].style.border = '2px solid black';
                button[i].style.color = 'black';
            }
        }        
        setDarkMode(!darkMode);
    }

    return (
        <header>
            <h1 style={ {color} } >React Hooks</h1>
            <button type="button" onClick={ handleClick } >{ darkMode ? 'Ligth Mode' : 'Dark Mode' }</button>
        </header>
    )
}

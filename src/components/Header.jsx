import React, { useState } from 'react';

export const Header = () => {
    const [ darkMode, setDarkMode ] = useState(false);

    //===== Creating a function to handle the click of the button =====//
    function handleClick() {
        const articles = document.querySelectorAll('article');
        const body = document.querySelector('body');
        const button = document.querySelector('button');
        const header = document.querySelector('header');
        if(!darkMode) {
            body.classList.add('dark-mode');
            button.style.border = '2px solid white';
            button.style.color = 'white';
            header.style.borderBottomColor = 'white'
            for (let i = 0; i < articles.length; i++) {
                articles[i].style.border = '2px solid white';
            }
        } else {
            body.classList.remove('dark-mode');
            button.style.border = '2px solid black';
            button.style.color = 'black';
            header.style.borderBottomColor = 'black'
            for (let i = 0; i < articles.length; i++) {
                articles[i].style.border = '2px solid black';
            }
        }        
        setDarkMode(!darkMode);
    }

    return (
        <header>
            <h1>React Hooks</h1>
            <button type="button" onClick={ handleClick } >{ darkMode ? 'Ligth Mode' : 'Dark Mode' }</button>
        </header>
    )
}

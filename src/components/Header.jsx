import React, { useState } from 'react';

export const Header = () => {
    const [ darkMode, setDarkMode ] = useState(false);

    //==> Creating a function to handle the click of the button
    function handleClick() {
        if(darkMode) {
            document.querySelector('body').classList.add('dark-mode');
        } else {
            document.querySelector('body').classList.remove('dark-mode');
        }        
        setDarkMode(!darkMode);
    }

    return (
        <header>
            <h1>React Hooks</h1>
            <button type="button" onClick={ handleClick } >{ darkMode ? 'Dark Mode' : 'Light Mode' }</button>
        </header>
    )
}

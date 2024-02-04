import React from 'react'

function Header({onDarkModeClick, isDarkMode}){
    function handleDarkModeToggle(){
        const newMode = onDarkModeClick;
        onDarkModeClick(newMode);
    }
    return (
        <div>
            <header>
                <h2>Shopster</h2>
                <button onClick={handleDarkModeToggle}>
                {isDarkMode ? "Dark" : "Light"} Mode
                </button>
            </header>
        </div>
    )
}

export default Header;
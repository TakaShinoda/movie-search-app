import React from 'react'

export const Header = (props) => {
    return (
        <header className="App-header">
            <h2>{props.text}</h2>
        </header>
    )
}
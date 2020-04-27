import React from 'react'

interface HeaderProps {
    text: string
}

export const Header: React.FC<HeaderProps> = props => {
    return (
        <header className="App-header">
            <h2>{props.text}</h2>
        </header>
    )
}
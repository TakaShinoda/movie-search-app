import React from 'react'

interface Props {
    text: string
}

export const Header: React.FC<Props> = props => {
    return (
        <header className="App-header">
            <h2>{props.text}</h2>
        </header>
    )
}
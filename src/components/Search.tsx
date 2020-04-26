import React, { useState } from 'react'

interface Props {
    search: Function
}

export const Search: React.FC<Props> = (props) => {
    const [searchValue, setSearchValue] = useState<string>('')

    const handleSearchInputChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value)
    }

    const resetInputField = () => {
        setSearchValue('')
    }

    const callSearchFunction = (e: React.MouseEvent<HTMLInputElement>) => {
        e.preventDefault()
        props.search(searchValue)
        resetInputField()
    }

    return (
        <form className="search">
            <input type="text" value={searchValue} onChange={handleSearchInputChanges} />
            <input type="submit" value="SEARCH" onClick={callSearchFunction} />
        </form>
    )
}
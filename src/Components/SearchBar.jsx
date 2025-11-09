import React, { useContext, useEffect } from 'react'
import { Store } from './ContextAPI'



const SearchBar = () => {

    const { search, setSearch } = useContext(Store)

    const HandleSearch = (e) => {
        setSearch(e.target.value);
    }


    return (
        <>
            <input
                className='border-2 border-sky-600 rounded-md p-1'
                type="text"
                placeholder='Search Here...'
                onChange={(e) => { HandleSearch(e) }}
            />
        </>
    )
}

export default SearchBar
import React, { useContext } from 'react'
import { Store } from '../Components/ContextAPI'
import SearchBar from '../Components/SearchBar'


const Home = () => {

    const { task } = useContext(Store)

    return (
        <>
            <div>
                <h1 className='font-bold text-3xl'>My Notes</h1>
                <p className='text-gray-500'>Add Your Tasks Here...</p>
            </div>
            <div>
                <SearchBar />
            </div>
        </>
    )
}

export default Home
import React, { useContext } from 'react'
import { Store } from '../Components/ContextAPI'
import SearchBar from '../Components/SearchBar'
import Cards from '../Components/Cards'


const Home = () => {

    const { task } = useContext(Store)

    return (
        <>
            <div className="bg-[#1B262C] text-white min-h-screen font-[Poppins,sans-serif">

                <div className='py-6'>
                    <h1 className='font-bold text-3xl'>My Notes</h1>
                    <p className='text-gray-500'>Add Your Tasks Here...</p>
                </div>

                <div className='mb-6'>
                    <SearchBar />
                </div>

                <Cards />

            </div>
        </>
    )
}

export default Home
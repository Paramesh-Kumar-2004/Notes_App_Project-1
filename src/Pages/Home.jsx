import React, { useContext } from 'react'
import { Store } from '../Components/ContextAPI'


const Home = () => {

    const { task } = useContext(Store)

    return (
        <>
            <h2>{task}</h2>
        </>
    )
}

export default Home
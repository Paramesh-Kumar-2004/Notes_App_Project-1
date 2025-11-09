import React, { createContext, useEffect, useState } from 'react'


export const Store = createContext()


const ContextAPI = ({ children }) => {

    const [task, setTask] = useState([])
    const [search, setSearch] = useState("All")



    return (
        <Store.Provider value={{ task, search, setSearch }}>
            {children}
        </Store.Provider>
    )
}

export default ContextAPI
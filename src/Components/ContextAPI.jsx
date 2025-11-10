import React, { createContext, useEffect, useState } from 'react'


export const Store = createContext()


const ContextAPI = ({ children }) => {

    const [task, setTask] = useState(JSON.parse(localStorage.getItem("task")) || []);
    const [search, setSearch] = useState("all")



    return (
        <Store.Provider value={{ task, setTask, search, setSearch }}>
            {children}
        </Store.Provider>
    )
}

export default ContextAPI
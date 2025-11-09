import React, { createContext, useState } from 'react'


export const Store = createContext()


const ContextAPI = ({ children }) => {
    const [task, setTask] = useState("Hi Hello")
    return (
        <Store.Provider value={{ task }}>
            {children}
        </Store.Provider>
    )
}

export default ContextAPI
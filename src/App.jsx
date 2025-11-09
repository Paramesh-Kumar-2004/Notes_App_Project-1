import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import { Store } from './Components/ContextAPI'



const App = () => {
  return (
    <BrowserRouter>
      <Store >
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Store>
    </BrowserRouter>
  )
}

export default App

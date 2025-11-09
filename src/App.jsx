import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import ContextAPI from './Components/ContextAPI'



const App = () => {
  return (
    <BrowserRouter>
      <ContextAPI >
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </ContextAPI>
    </BrowserRouter>
  )
}

export default App

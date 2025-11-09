import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import ContextAPI from './Components/ContextAPI'
import CreateTasks from './Pages/CreateTasks'



const App = () => {
  return (
    <ContextAPI >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/createTasks' element={<CreateTasks />} />
        </Routes>
      </BrowserRouter>
    </ContextAPI>
  )
}

export default App

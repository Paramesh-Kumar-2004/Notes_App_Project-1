import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import ContextAPI from './Components/ContextAPI'
import CreateTasks from './Pages/CreateTasks'
import EditTask from './Pages/EditTask'



const App = () => {
  return (
    <ContextAPI >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/createTasks' element={<CreateTasks />} />
          <Route path='/edit-task/:id' element={<EditTask />} />
        </Routes>
      </BrowserRouter>
    </ContextAPI>
  )
}

export default App

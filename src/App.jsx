import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import GenAi from './components/trainings/GenAi'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<GenAi/>}/>x  
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

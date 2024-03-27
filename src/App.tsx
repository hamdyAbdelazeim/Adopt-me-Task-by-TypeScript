import React from 'react'
import Detail from './pages/Detail'
import ErrorPage from './pages/ErrorPage'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/details/:id' element={<Detail />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </>
  )
}

export default App

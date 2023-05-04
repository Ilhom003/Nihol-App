import React from 'react'
import Navbar from '../components/Navbar'
import Login from '../components/Login'
import Home from '../components/Home'
import Report from '../components/Report'
import { Route, Routes } from 'react-router-dom'
import { RequireAuth } from 'react-auth-kit'

const Root = () => {
  return (
    <Routes>
      <Route path='/' element={<RequireAuth loginPath='/login'> <Navbar /></RequireAuth>}>
        <Route element={<Home />} index />
        <Route element={<Report />} path='/report' />
      </Route>
      <Route element={<Login />} path='/login' />
    </Routes>
  ) 
}

export default Root
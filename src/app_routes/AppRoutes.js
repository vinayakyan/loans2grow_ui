import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AddStaff, AdminDashBoard, AdminHome } from '../components/admin_components'
import { Home } from '../components'

function AppRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/admin' element={<AdminDashBoard/>}>
            <Route path='' element={<AdminHome/>} />
            <Route path='add-staff' element={<AddStaff />} />
        </Route>
    </Routes>
  )
}

export default AppRoutes
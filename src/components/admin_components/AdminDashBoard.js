import React from 'react'
import AdminNavBar from './AdminNavBar'
import { Outlet } from 'react-router-dom'

function AdminDashBoard() {
  return (
    <>
        <AdminNavBar />
        <Outlet />
    </>
  )
}

export default AdminDashBoard
import React from 'react'
import Sidebar from '../Components/Sidebar'
import { Outlet } from 'react-router-dom'
import Header from '../Components/Header'

function LayoutDashboard() {
  return (
    <div className='min-h-screen grid grid-cols-1 xl:grid-cols-6'>
        <Sidebar/>
        <div className='xl:col-span-5'>
            <Header/>
            <div className='px-5 h-[90vh] overflow-y-scroll py-8'>
                <Outlet/>
            </div>
        </div>
    </div>
  )
}

export default LayoutDashboard
import React from 'react'
import { logout, auth } from '../../firebase'
import { useNavigate } from 'react-router-dom'
import './dashboard.css'
import Sidebar from './sidebar/Sidebar'
import Navbar from './navbar/Navbar'
import Cards from './cards/Cards'
import Activities from './activities/Activities'

function Dashboard() {
    const navigate = useNavigate()

    const handleLogout = () => {
        logout()    
        navigate('/')
    }
  return (
    <div className='main-dashboard'>
      <div className="sidebar-component">
        <Sidebar/>
      </div>
      <div className="main-component">
        <Navbar handleLogout={handleLogout}/>
        <Cards/>
        <Activities/>
      </div>
    </div>
  )
}

export default Dashboard
import React from 'react'
import { logout, auth } from '../../firebase'
import { useNavigate } from 'react-router-dom'
import './dashboard.css'
import Sidebar from './sidebar/Sidebar'
import Navbar from './navbar/Navbar'
import Cards from './cards/Cards'

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
        <Navbar/>
        <Cards/>
      </div>
        {/* <button onClick={handleLogout}>Logout</button> */}
    </div>
  )
}

export default Dashboard
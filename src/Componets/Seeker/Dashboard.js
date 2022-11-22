import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Header/Navbar'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {

    const navigate = useNavigate()

    useEffect(()=>{
        navigate("home-seeker")
        // eslint-disable-next-line
    },[])

  return (
    <div>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default Dashboard
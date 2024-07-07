import React from 'react'
import '../styles/LandingPage.css'
import { useNavigate } from 'react-router-dom'


const Dashboard = () => {
  const navigate = useNavigate()
  return (
    <div className="showcase">
      <div className="container">
        <div className="showcase-top">
          <a className="navbar-brand" >
            Expensia
          </a>
          <button type="button" onClick={() => navigate('/login')}>Logout</button>

        </div>
        <div className="showcase-content">
          <p>Dashboard</p>
        </div>
      </div>

    </div>


  )
}

export default Dashboard
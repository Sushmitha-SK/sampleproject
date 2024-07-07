import React from 'react'
import { useNavigate } from 'react-router-dom'
import showCaseImage from '../assets/intro.png'
import '../styles/LandingPage.css'

const LandingPage = () => {
    const navigate = useNavigate()
    return (
        <div className="showcase">
            <div className="container">
                <div className="showcase-top">
                    <a className="navbar-brand" onClick={() => navigate('/')}>
                        Expensia
                    </a>
                    <button type="button" onClick={() => navigate('/login')}>Login</button>
                </div>
                <div className="showcase-content">
                    <div className="sc-left">
                        <h1>Where Innovation Meets Expense Tracking</h1>

                        <p>Elevate Your Finances with Precision Tracking and Smart Budgeting Solutions</p>
                        <div className="sc-btns">
                            <button type="button" onClick={() => navigate('/login')}>
                                Get Started
                            </button>

                        </div>
                    </div>
                    <div className="sc-right">
                        <img src={showCaseImage} alt="showcase image" />
                    </div>
                </div>
            </div>

        </div>


    )
}

export default LandingPage
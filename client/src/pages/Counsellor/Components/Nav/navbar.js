import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import Button from '../../../../Components/button/button'

const navbar = () => {
  return (
    <>
    <div className="navContainer">
        <h2><span>Name of Counsellor</span></h2>
        <h5>Counsellor</h5>
        <div className="navContains">
            <div className="navTag upcoming">
                <Link to={"./upcoming.js"}>
                    <p className="upcomingAppoint">Upcoming Appointments</p>
                </Link>
            </div>
            <div className="navTag past">
                <Link to={"./past.js"}>
                    <p className="pastAppoint">Past Appointments</p>
                </Link>
            </div>
            <div className="logout">
                <Button buttonStyle="btn-line">Logout</Button>
            </div>
        </div>
    </div>
    </>
  )
}

export default navbar
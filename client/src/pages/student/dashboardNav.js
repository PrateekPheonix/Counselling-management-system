import React from 'react'
import './dashboardNav.css'
import { Link } from 'react-router-dom'
import Button from '../../Components/button/button'

const dashboardNav = () => {
  return (
    <>
    <div className="navContainer">
        <h2><span>Name of Student</span></h2>
        <h5>Student</h5>
        <div className="navContains">
            <div className="navTag upcoming">
                <Link to={"./upcoming.js"}>
                    <p className="upcomingAppoint">Upcoming Appointments</p>
                </Link>
            </div>
            <div className="navTag past">
                <Link to={"./past.js"}>
                    <p>Past Appointments</p>
                </Link>
            </div>
        </div>
        <div className="bookAppoint">
            <Button buttonStyle="btn-normal">Book Appointment</Button>
        </div>
    </div>
    </>
  )
}

export default dashboardNav
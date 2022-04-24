import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../../../Components/button/button'
import './navAdmin.css'

const NavAdmin = () => {
  return (
    <>
    <div className="adminNav">
        <h5>Admin</h5>
        <div className="navContains">
            <div className="navTag upcoming">
                <Link to={"./upcoming.js"}>
                    <p className="upcomingAppoint">Appointments</p>
                </Link>
            </div>
            <div className="navTag past">
                <Link to={"./past.js"}>
                    <p className="pastAppoint">Users</p>
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

export default NavAdmin
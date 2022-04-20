import React from 'react'
import LeftNav from './dashboardNav'
import './upcoming.css'
import  UpcomingCard from './components/CardUpcoming/upcomingCard'

const upcoming = () => {
  return (
    <>
    <div className="upcoming">
    <div className="left">
    <LeftNav/>
    </div>
    <div className="rightUpcoming">
      <UpcomingCard/>
    </div>
    </div>
    </>
  )
}

export default upcoming
import React, { useState, useEffect } from 'react'
import LeftNav from './components/nav/dashboardNav'
import './upcoming.css'
import  UpcomingCard from './components/CardUpcoming/upcomingCard'
import Nocard from './components/nocard/nocard'

const Upcoming = () => {
  // const [upcomings, setUpcomings] = useState([]);
  //   useEffect(()=>{
  //       const fetchData = async()=>{
  //           const result = await readUpcomings();
  //           console.log(result)
  //           setUpcomings(result.upcomings)
  //       }
  //       fetchData()
  //   }, [])
  return (
    <>
    <div className="upcoming">
    <div className="left">
    <LeftNav/>
    </div>
    <div className="rightUpcoming">
      <Nocard/>
      {/* {upcomings.map(upcoming=>
        <UpcomingCard key={upcoming._id} upcoming={upcoming}/>
      )} */}
    </div>
    </div>
    </>
  )
}

export default Upcoming
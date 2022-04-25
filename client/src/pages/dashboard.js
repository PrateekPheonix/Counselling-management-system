import React, { useEffect, useContext } from 'react'
import Upcoming from './student/upcoming';
import DashboardAdmin from './admin/dashboardAdmin';
import UpcomingCounsellor from './Counsellor/UpcomingCounsellor';
import Error from './error';
import { UserContext } from "../Context/UserContext";

const Dashboard = () => {
  const [user, setUser] = useContext(UserContext)
  let role = user.role

  if (role == "Student") {
    return (
      <Upcoming />
    )
  }
  else if (role == "Counsellor") {
    return (
      <UpcomingCounsellor />
    )
  }
  if (role == "Admin") {
    return (
      <DashboardAdmin />
    )
  }
  return (
    <>
      <h1>Error 404</h1>
    </>
  )
}

export default Dashboard
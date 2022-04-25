import React, { useEffect, useContext } from 'react'
import DashboardStudent from './student/DashboardStudent'
import DashboardAdmin from './admin/dashboardAdmin';
import DashboardCounsellor from './Counsellor/DashboardCounsellor';
import Error from './error';
import { UserContext } from "../Context/UserContext";

const Dashboard = () => {
  const [user, setUser] = useContext(UserContext)
  let role = user.role

  if (role == "Student") {
    return (
      <DashboardStudent />
    )
  }
  else if (role == "Counsellor") {
    return (
      <DashboardCounsellor />
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
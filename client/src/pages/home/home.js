import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import Button from '../../Components/button/button'

const Home = () => {
  return (
    <>
    <Link to="../login/login"><Button buttonStyle="btn-normal">Login</Button></Link>
    <Link to="../register/register"><Button buttonStyle="btn-line">Register</Button></Link>
    </>
  )
}

export default Home;
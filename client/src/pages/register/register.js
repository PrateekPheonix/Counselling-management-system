import React, { useEffect, useState, useContext } from 'react';
import Button from '../../Components/button/button'
import './register.css'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'
import { UserContext } from "../../Context/UserContext";

function Register(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [user, setUser] = useContext(UserContext)
    const navigate = useNavigate();

    const config = {
        headers: {
            "Content-type": "application/json"
        }
    }

    const formSubmit = async (e) => {
        e.preventDefault()
        let result
        try {
            result = await axios.post('http://localhost:5000/signup', {
                name,
                email,
                password,
            }, config)
            console.log(result)
        } catch (error) {
            console.log(error)
        }
        setUser(result.data.user.role)
        setName("")
        setEmail("")
        setPassword("")
        navigate('/dashboard')
    }

    return (
        <>
            <div className="register">
                <div className="left-side">
                    <div className="form-part">
                        <h1>Register</h1>
                        <form action='#' onSubmit={formSubmit}>
                            <p>Username:</p>
                            <input
                                type="text"
                                name="name"
                                onChange={(e) => setName(e.target.value)}
                                placeholder='Enter your BT number.'
                            />
                            <br />
                            <p>E-Mail Id:</p>
                            <input
                                type="text"
                                name="email"
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder='Enter college Email Id'
                            />
                            <br />
                            <p>Password</p>
                            <input
                                type="password"
                                name="password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <br />
                            <Button
                                buttonStyle="btn-normal"
                                type="submit"
                            >Submit</Button>
                        </form>
                    </div>
                </div>
                <div className="right-side">
                    <div className="right">
                        <h1>Already Registered?</h1>
                        <Link to="/login"> <Button buttonStyle="btn-normal">Login</Button></Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Register;
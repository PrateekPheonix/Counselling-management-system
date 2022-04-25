import React, { Component, useState, useContext } from "react";
import Button from "../../Components/button/button";
import "./login.css";
import axios from 'axios';
import { useNavigate, Link } from "react-router-dom"
import { UserContext } from "../../Context/UserContext";

const Login = ({ setLoginUser }) => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [user, setUser] = useContext(UserContext)

    const config = {
        headers: {
            "Content-type": "application/json"
        }
    }

    const formSubmit = async (e) => {
        e.preventDefault()
        let result
        try {
            result = await axios.post('http://localhost:5000/login', {
                email,
                password,
            }, config)
            console.log(result)
        } catch (error) {
            console.log(error)
            alert("Invalid Credentials")
        }
        setUser(result.data.user)
        setEmail("")
        setPassword("")
        navigate('/dashboard')
    }
    return (
        <>
            <div className="login">
                <div className="leftSide">
                    <div className="leFt">
                        <h1>Not Registered yet?</h1>
                        <Link to="/register"><Button buttonStyle="btn-normal">Register</Button></Link>
                    </div>
                </div>
                <div className="rightSide">
                    <div className="form-part">
                        <h1>Login</h1>
                        <div className="form">
                            <form action="#" onSubmit={formSubmit}>
                                <p>E-Mail Id:</p>
                                <input
                                    type="text"
                                    name="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    placeholder='Enter college email id' />
                                <br />
                                <p>Password</p>
                                <input
                                    type="password"
                                    name="password"
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    placeholder='' />
                                <br />
                                <Button
                                    buttonStyle="btn-normal"
                                    type="submit"
                                >Login</Button>
                            </form>
                            <div className="forgot">
                                <Button buttonStyle="btn-line">Forgot Password?</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Login


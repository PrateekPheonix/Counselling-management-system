import React, { Component, useState } from "react";
import Button from "../../Components/button/button";
import "./login.css";
import axios from 'axios';
import { useNavigate,Link } from "react-router-dom"

const Login = ({ setLoginUser }) => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const lgoin = async (e) => {
        e.preventDefault();
		navigate("/dashboard")
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
                            <form action="#" onSubmit={lgoin}>
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
                                onClick={lgoin}>Login</Button>
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


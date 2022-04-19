import React, { useState } from 'react';
import Button from '../../Components/button/button'
import './register.css'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'

function Register() {
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        wingname: "",
        website: "",
        description: "",
        logo: ""
    });
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    }
    //register function 
    const egister = async (e) => {
        e.preventDefault();
        try {
            const url = "";
            await axios.post(url, data);
            navigate("")
        } catch (error) {
            if (
                error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500
            ) {
                setError(error.response.data.message);
            }
        }
    }
    return (
        <>
            <div className="register">
                <div className="left-side">
                    <div className="form-part">
                        <h1>Register</h1>
                        <form action='#' onSubmit={egister}>
                            <p>Username:</p>
                            <input
                                type="text"
                                name="name"
                                value={data.name}
                                onChange={handleChange}
                                placeholder='Enter your BT number.'
                            />
                            <br />
                            <p>E-Mail Id:</p>
                            <input
                                type="text"
                                name="email"
                                value={data.email}
                                onChange={handleChange}
                                placeholder='Enter college Email Id'
                            />
                            <br />
                            <p>Password</p>
                            <input
                                type="password"
                                name="password"
                                value={data.password}
                                onChange={handleChange}
                            />
                            <br />
                            <Button
                                buttonStyle="btn-normal"
                                type="submit" 
                                onClick={egister}
                                >Submit</Button>
                        </form>
                    </div>
                </div>
                <div className="right-side">
                    <div className="right">
                        <h1>Already Registered?</h1>
                        <Link to=""><Button buttonStyle="btn-normal">Login</Button></Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Register;
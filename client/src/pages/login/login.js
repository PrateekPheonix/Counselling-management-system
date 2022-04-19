import React, { Component, useState } from "react";
import Button from "../../Components/button/button";
import "./login.css";
import axios from 'axios';
import { useNavigate,Link } from "react-router-dom"

const Login = ({ setLoginUser }) => {
    const navigate = useNavigate()

    const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");

    const handlChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    };

    const lgoin = async (e) => {
        e.preventDefault();
		try {
			const url = "";
			const { data: res } = await axios.post(url, data);
			localStorage.setItem("token", res.data);
			window.location = "";
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
            <div className="login">
                <div className="leftSide">
                    <div className="leFt">
                        <h1>Not Registered yet?</h1>
                        <Link to=""><Button buttonStyle="btn-normal">Register</Button></Link>
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
                                value={data.email}
                                onChange={handlChange}
                                required
                                placeholder='Enter college email id' />
                            <br />
                            <p>Password</p>
                            <input
                                type="password"
                                name="password"
                                value={data.password}
                                onChange={handlChange}
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


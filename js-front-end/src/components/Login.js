import React, { useState } from "react";
import axios from "axios";
import logo from "../assets/logo.png"
import loginSchema from '../validation/loginSchema';
import * as yup from 'yup';

const Login = (props) => {

	const initialErrors = {
		email: '',
		password: ''
	}

	const [credentials, setCredentials] = useState({ email: "", password: "" });
	const [errors, setErrors] = useState(initialErrors);

	const login = (e) => {
		e.preventDefault();
		// axios
		// 	.post(
		// 		"https://jrmmba-foundation.herokuapp.com/login",
		// 		`grant_type=password&username=${credentials.username}&password=${credentials.password}`,
		// 		{
		// 			headers: {
		// 				// btoa is converting our client id/client secret into base64
		// 				Authorization: `Basic ${btoa("lambda-client:lambda-secret")}`,
		// 				"Content-Type": "application/x-www-form-urlencoded",
		// 			},
		// 		},
		// 	)
		// 	.then((res) => {
		// 		console.log(res.data);
		// 		localStorage.setItem("token", res.data.access_token);
		// 		props.history.push("/userinfo");
		// 	});
		console.log(credentials)
	};

	const validateLogin = (name, value) => {
		yup.reach(loginSchema, name)
			.validate(value)
			.then(valid => setErrors(initialErrors))
			.catch(err => setErrors({...errors, [name]: err.errors[0]}))
	}

	const handleChange = (e) => {
		const { name, value } = e.target;

		validateLogin(name, value);
		setCredentials({
			...credentials,
			[name]: value,
		});
	}

	return (
		<>
		<img src={logo} alt=""/>
		<h2>Fitness Login</h2>
		<form onSubmit={login}>
			<label>
				Email:
				<input
					type="email"
					name="email"
					value={credentials.email}
					onChange={handleChange}
				/>
			</label>
			<label>
				password:
				<input
					type="password"
					name="password"
					value={credentials.password}
					onChange={handleChange}
				/>
			</label>
			<br/>
			<button>Log in</button>
		</form>
		<div>
			<p>{errors.email}</p>
			<p>{errors.password}</p>
		</div>
		</>
	);
};

export default Login;

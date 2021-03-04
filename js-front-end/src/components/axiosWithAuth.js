// code from student Nicholas Myers! Thank you Nicholas!

import axios from "axios";

export const axiosWithAuth = () => {
	const token = window.localStorage.getItem("token");

	return axios.create({
		headers: {
			Authorization: `Bearer ${token}`,
		},
		baseURL: "https://ttweb43-backendjava.herokuapp.com",
	});
	
};


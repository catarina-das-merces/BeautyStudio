import { get } from "http";
import { Appointment } from "../Types/interfaces";
import { data } from "autoprefixer";
const API = process.env.NEXT_PUBLIC_APIURL;
const token =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNzQzOTQyNTIwLCJleHAiOjE3NDQwMjg5MjB9.aSdQJ9ba9xdeXDf2TfgqxyPsTxeJcJMi-9vaj49jmA4";
console.log("API URL:", API);

export const submitAppointment = async (appointmentData: Appointment) => {
	const response = await fetch(`${API}/appointments`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(appointmentData),
	});
	console.log("Response status:", response.status);
	if (!response.ok) {
		throw new Error("Failed to submit appointment");
	}

	return response.json();
};

export const getAppointments = async () => {
	const response = await fetch(`${API}/appointments`, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`,
		},
	});
	if (!response.ok) {
		throw new Error("Failed to fetch appointments");
	}
	const data = await response.json();
	console.log("Response data:", data);
	return data;
};

getAppointments();

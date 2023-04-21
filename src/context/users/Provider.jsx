/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import { useState } from "react";
import UsersContext from "./index";
import axios from "axios";

export const UsersProvider = ({ children }) => {
	const [usersList, setUsersList] = useState([]);

	const getUsers = async () => {
		try {
			const { data } = await axios.get("https://raw.githubusercontent.com/robconery/json-sales-data/master/data/customers.json");
			setUsersList(data?.slice(0, 50));
		} catch (error) {
			console.log("error geting users", error);
		}
	};

	const addUser = (user) => {
		setUsersList([...usersList, user]);
		console.log("user added", user);
	};

	const deleteUser = (userId) => {
		setUsersList(usersList.filter((user) => user.id !== userId));
		console.log(`The user with the id: ${userId} has been removed`);
	};
	return <UsersContext.Provider value={{ usersList, getUsers, deleteUser, addUser }}>{children}</UsersContext.Provider>;
};

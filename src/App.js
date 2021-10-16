import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

const App = () => {
	const [usersList, setUsersList] = useState([]);

	const addUserHandler = (name, age) => {
		setUsersList((prevUsersList) => {
			return [
				...prevUsersList,
				{ name: name, age: age, id: Math.random().toString() },
			];
		});
	};

	return (
		<React.Fragment>
			<AddUser onAddUser={addUserHandler}></AddUser>
			<UsersList users={usersList}></UsersList>
		</React.Fragment>
	);
};

export default App;

import { useState } from "react";
import AddUser from "./Users/AddUser";
import UsersList from "./Users/UsersList";

const App = () => {
	const [usersList, setUsersList] = useState([]);

	const addUserHandler = (name, age) => {
		setUsersList((prevUsersList) => {
			return [...prevUsersList, { name: name, age: age }];
		});
	};

	return (
		<div>
			<AddUser onAddUser={addUserHandler}></AddUser>
			<UsersList users={usersList}></UsersList>
		</div>
	);
};

export default App;

import AddUser from "./Users/AddUser";
import UsersList from "./Users/UsersList";

const App = () => {
	const users = [];
	return (
		<div>
			<AddUser></AddUser>
			<UsersList users={[]}></UsersList>
		</div>
	);
};

export default App;

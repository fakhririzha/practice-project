import { useState } from "react";

import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";

import classes from "./AddUser.module.css";

const AddUser = (props) => {
	const [enteredName, setEnteredUsername] = useState("");
	const [enteredAge, setEnteredAge] = useState("");

	const addUserHandler = (event) => {
		event.preventDefault();
		if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
			return;
		}
		if (+enteredAge < 1) {
			return;
		}
		props.onAddUser(enteredName, enteredAge);
		setEnteredUsername("");
		setEnteredAge("");
	};

	const nameChangeHandler = (event) => {
		setEnteredUsername(event.target.value);
	};

	const ageChangeHandler = (event) => {
		setEnteredAge(event.target.value);
	};

	return (
		<div>
			<ErrorModal
				title="An error occured!"
				message="Something went wrong!"
			></ErrorModal>
			<Card className={classes.input}>
				<form onSubmit={addUserHandler}>
					<label htmlFor="username">Username</label>
					<input
						id="username"
						type="text"
						value={enteredName}
						onChange={nameChangeHandler}
					/>
					<label htmlFor="age">Age (Years)</label>
					<input
						id="age"
						type="number"
						value={enteredAge}
						onChange={ageChangeHandler}
					/>
					<Button type="submit">Add User</Button>
				</form>
			</Card>
		</div>
	);
};

export default AddUser;

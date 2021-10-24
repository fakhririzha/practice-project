import { useState, useRef } from "react";
import Wrapper from "../Helpers/Wrapper";

import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";

import classes from "./AddUser.module.css";

const AddUser = (props) => {
	// const [enteredName, setEnteredUsername] = useState("");
	// const [enteredAge, setEnteredAge] = useState("");

	const nameInputRef = useRef("");
	const ageInputRef = useRef("");

	const [formError, setFormError] = useState();

	const addUserHandler = (event) => {
		event.preventDefault();
		const enteredUserName = nameInputRef.current.value;
		const enteredUserAge = ageInputRef.current.value;
		if (
			enteredUserName.trim().length === 0 ||
			enteredUserAge.trim().length === 0
		) {
			setFormError({
				title: "Invalid input",
				message: "Please enter a valid name and age (non-empty values).",
			});
			return;
		}
		if (+enteredUserAge < 1) {
			setFormError({
				title: "Invalid input",
				message: "Please enter a valid age (> 0).",
			});
			return;
		}
		props.onAddUser(enteredUserName, enteredUserAge);
		nameInputRef.current.value = "";
		ageInputRef.current.value = "";
		// setEnteredUsername("");
		// setEnteredAge("");
	};

	// const nameChangeHandler = (event) => {
	// 	setEnteredUsername(event.target.value);
	// };

	// const ageChangeHandler = (event) => {
	// 	setEnteredAge(event.target.value);
	// };

	const errorHandler = () => {
		setFormError(null);
	};

	return (
		<Wrapper>
			{formError && (
				<ErrorModal
					title={formError.title}
					message={formError.message}
					onConfirm={errorHandler}
				></ErrorModal>
			)}
			<Card className={classes.input}>
				<form onSubmit={addUserHandler}>
					<label htmlFor="username">Username</label>
					<input
						id="username"
						type="text"
						// value={enteredName}
						// onChange={nameChangeHandler}
						ref={nameInputRef}
					/>
					<label htmlFor="age">Age (Years)</label>
					<input
						id="age"
						type="number"
						// value={enteredAge}
						// onChange={ageChangeHandler}
						ref={ageInputRef}
					/>
					<Button type="submit">Add User</Button>
				</form>
			</Card>
		</Wrapper>
	);
};

export default AddUser;

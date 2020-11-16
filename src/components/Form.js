import React, { useState } from 'react';

const Form = (props) => {
	const [input, setInput] = useState({
		name: '',
		artist: '',
		time: '',
		favorites: false,
	});

	const handleChange = (event) => {
		setInput({ ...input, [event.target.name]: event.target.value });
	};

	const checkForm = (event) => {
		event.preventDefault();
		props.handleAddSong(input);
	};

	return (
		<div>
			<h1>Add A New Song</h1>
			<form onSubmit={checkForm}>
				<label htmlFor='name'>Name</label>
				<input
					type='text'
					id='name'
					name='name'
					onChange={handleChange}></input>
				<br />
				<label htmlFor='artist'>Artist</label>
				<input
					type='text'
					id='artist'
					name='artist'
					onChange={handleChange}></input>
				<br />
				<label htmlFor='time'>Time</label>
				<input
					type='text'
					id='time'
					name='time'
					onChange={handleChange}></input>
				<br />
				<input type='submit' value='Submit'></input>
			</form>
		</div>
	);
};

export default Form;

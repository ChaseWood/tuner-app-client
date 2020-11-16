import React, { useState } from 'react';

const Form = () => {
	const [input, setInput] = useState({
		name: '',
		artist: '',
		time: '',
	});

	const checkForm = (event) => {
		event.preventDefault();
		console.log('the form worked', event);
	};

	return (
		<div>
			<h1>Add A New Song</h1>
			<form onSubmit={checkForm}>
				<label for='title'>Title</label>
				<input type='text' id='title' name='title'></input>
				<br />
				<label for='artist'>Artist</label>
				<input type='text' id='artist' name='artist'></input>
				<br />
				<label for='time'>Time</label>
				<input type='text' id='time' name='time'></input>
				<br />
				<input type='submit' value='Submit'></input>
			</form>
		</div>
	);
};

export default Form;

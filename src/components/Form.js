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
			<h1 className='tuner'>Add A New Song</h1>
			<form onSubmit={checkForm} className='formContainer'>
				<label htmlFor='name'></label>
				<input
					type='text'
					id='name'
					name='name'
					onChange={handleChange}
					className='form'
					placeholder='Name'></input>
				<br />
				<label htmlFor='artist'></label>
				<input
					type='text'
					id='artist'
					name='artist'
					onChange={handleChange}
					className='form'
					placeholder='Artist'></input>
				<br />
				<label htmlFor='time'></label>
				<input
					type='text'
					id='time'
					name='time'
					onChange={handleChange}
					className='form'
					placeholder='Time'></input>
				<br />
				<input type='submit' value='Submit' className='form'></input>
			</form>
		</div>
	);
};

export default Form;

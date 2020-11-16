import React, { useEffect, useState } from 'react';
// import { Route, Switch } from 'react-router';
import logo from './logo.svg';
import './App.css';
import Display from '../src/components/Display';
import Form from '../src/components/Form';

function App() {
	const url = 'https://tunerapi.herokuapp.com/songs';

	const [songs, setSongs] = useState({});

	const getSongs = async () => {
		try {
			const res = await fetch(url);
			const json = await res.json();
			setSongs(json);
		} catch (err) {
			console.error(err);
		}
	};

	useEffect(() => getSongs(), []);

	const handleAddSong = (input) => {
		console.log(input);
		fetch(
			`${url}/?name=${input.name}&artist=${input.artist}&time=${input.time}&favorites=${input.favorites}`,
			{
				method: 'post',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(input),
			}
		).then(() => getSongs());
	};

	const handleDeleteSong = (song) => {
		fetch(`${url}/${song.id}`, {
			method: 'delete',
		}).then(() => {
			getSongs();
		});
	};

	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<Display songs={songs} handleDeleteSong={handleDeleteSong} />
				<Form handleAddSong={handleAddSong} />
			</header>
		</div>
	);
}

export default App;

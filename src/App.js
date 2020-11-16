import React, { useEffect, useState } from 'react';
// import { Route, Switch } from 'react-router';
import logo from './logo.svg';
import './App.css';
import Display from '../src/components/Display';
import Form from '../src/components/Form';

function App() {
	const url = 'https://tunerapi.herokuapp.com/songs';

	const [songs, setSongs] = useState({});

	useEffect(() => {
		const getSongs = async () => {
			try {
				const res = await fetch(url);
				const json = await res.json();
				setSongs(json);
			} catch (err) {
				console.error(err);
			}
		};
		getSongs();
	}, []);

	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<Display songs={songs} />
				<Form />
			</header>
		</div>
	);
}

export default App;

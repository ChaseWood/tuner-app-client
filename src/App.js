import React, { useEffect, useState } from 'react';
import './App.css';
import Display from '../src/components/Display';
import Form from '../src/components/Form';

function App() {
	const url = 'https://tunerapi.herokuapp.com/songs';

	const [songs, setSongs] = useState({});
	const [favorites, setFavorites] = useState([]);

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

	const handleFavoriteSong = (song) => {
		const favSongs = [...favorites];
		const songIndex = favSongs.indexOf(song);
		songIndex > -1 ? favSongs.splice(songIndex, 1) : favSongs.push(song);
		setFavorites(favSongs);
	};

	return (
		<div className='App'>
			<header className='App-header'>
				<Display
					songs={songs}
					handleDeleteSong={handleDeleteSong}
					handleFavoriteSong={handleFavoriteSong}
				/>
				<Form handleAddSong={handleAddSong} />
			</header>
		</div>
	);
}

export default App;

import React, { useEffect, useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Display = (props) => {
	const [faves, setFaves] = useState([]);
	const { songs } = props;

	const handleFavoritesDelete = (id) => {
		const newFaves = faves.filter((fav) => fav.id !== id);
		setFaves(newFaves);
	};

	const loaded = () => (
		<div>
			<div className='container'>
				<h1>TUNER</h1>
			</div>
			<div>
				<h2 className='container'>Playlist</h2>
				{songs.map((song) => (
					<div className='container' key={song.id}>
						<div>{song.artist}</div>
						<div>{song.name}</div>
						<div>{song.time}</div>
						<div>
							<i
								className='far fa-heart'
								onClick={() => setFaves((faves) => [...faves, song])}></i>
						</div>
						<div>
							<i
								onClick={() => {
									props.handleDeleteSong(song);
								}}
								className='far fa-trash-alt'></i>
						</div>
					</div>
				))}
			</div>
			<h2 className='container'>Favorites</h2>
			{faves.map((favs) => (
				<div className='container' key={favs.id}>
					<div>{favs.artist}</div>
					<div>{favs.name}</div>
					<div>{favs.time}</div>
					<div>
						<i className='far fa-heart'></i>
					</div>
					<div>
						<i
							onClick={() => handleFavoritesDelete(favs.id)}
							className='far fa-trash-alt'></i>
					</div>
				</div>
			))}
		</div>
	);
	const loading = <h1>Loading...</h1>;

	return songs[0] ? loaded() : loading;
	// return <h1>Hello World</h1>;
};

export default Display;

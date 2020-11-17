import React, { useEffect, useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Display = (props) => {
	const [faves, setFaves] = useState([]);
	const { songs } = props;

	//https://www.robinwieruch.de/react-remove-item-from-list got this bit of code from here. I could not figure out how to remove from the favs list
	const handleFavoritesDelete = (id) => {
		const newFaves = faves.filter((fav) => fav.id !== id);
		setFaves(newFaves);
	};

	const loaded = () => (
		<div className='appBorder'>
			<div className='container'>
				<h1 className='tuner'>TUNR.</h1>
				<h3 className='header'> For All Your Playlist Needs</h3>
			</div>
			<div>
				<h2 className='container, playlist'>Playlist</h2>
				{songs.map((song) => (
					<div className='container' key={song.id}>
						<div className='artist'>{song.artist}</div>
						<div className='names'>{song.name}</div>
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
			<h2 className='container, playlist'>Favorites</h2>
			{faves.map((favs) => (
				<div className='container' key={favs.id}>
					<div>{favs.artist}</div>
					<div>{favs.name}</div>
					<div>{favs.time}</div>
					<div>
						<i className='fa fa-heart'></i>
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
};

export default Display;

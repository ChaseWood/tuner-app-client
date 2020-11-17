import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Display = (props) => {
	const { songs } = props;

	const loaded = () => (
		<div>
			<div>
				<h1>TUNER</h1>
			</div>
			<div>
				<h2>Playlist</h2>
				{songs.map((song) => (
					<div key={song.id}>
						<div>{song.name}</div>
						<div>{song.artist}</div>
						<div>{song.time}</div>
						<i className='far fa-heart'></i>
						<i
							onClick={() => {
								props.handleDeleteSong(song);
							}}
							class='far fa-trash-alt'></i>
					</div>
				))}
			</div>
			<h2>Favorites</h2>
		</div>
	);
	const loading = <h1>Loading...</h1>;

	return songs[0] ? loaded() : loading;
	// return <h1>Hello World</h1>;
};

export default Display;

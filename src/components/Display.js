import React from 'react';

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
						<button
							onClick={() => {
								props.handleDeleteSong(song);
							}}>
							Delete
						</button>
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

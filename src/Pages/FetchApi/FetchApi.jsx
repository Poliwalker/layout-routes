import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FetchApi = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		axios.get('https://rickandmortyapi.com/api/character/').then((res) => {
			console.log(res.data.results);
			setData(res.data.results);
		});
	}, [setData]);
	return (
		<>
			<h2 style={{ textAlign: 'center' }}>Fetch Api Rick and Morty</h2>

			<div
				style={{
					display: 'flex',
					flexWrap: 'wrap',
					justifyContent: 'space-around',
					gap: '1rem',
				}}
			>
				{data.map((character) => {
					return (
						<div key={character.id}>
							<h3>{character.name}</h3>
							<p>{character.species}</p>
							<p>{character.origin.name}</p>
							<img src={character.image} alt={character.name} />
						</div>
					);
				})}
			</div>
		</>
	);
};

export default FetchApi;

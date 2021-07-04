import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MatchDetailCard } from '../component/MatchDetailCard';

export const MatchPage = () => {
	
	const[matches, setMatchess] = useState([]);
	const { teamName, year } = useParams();

	
	useEffect(
			() => {
				const fetchMatches = async () => {
					const response = await fetch(
							`http://localhost:8090/team/${teamName}/matches?year=${year}`);
					const data = await response.json();
					console.log(data);
					setMatchess(data);
				};
				fetchMatches();
				
			}, []	
		
		);
	
	return (
    <div className="MatchPage"> 
    	<h1> MatchPage </h1>
    	{
    		matches.map(match => <MatchDetailCard  teamName={teamName}  match={match}/>)}

    	}
    </div>
  );
}
 

/*
 * const response = await fetch(`http://localhost:8090/team/Delhi Capitals/matches?year=2019`);
 * replace with
 *const response = await fetch(`http://localhost:8090/team/${teamName}/matches?year=2019`);

 * rename App.css to App.scss after yarn add node-sass -D
 * import in App.js App.scss
 * 
 */
 


import { React, useEffect, useState } from 'react';
import { MatchDetailCard } from '../component/MatchDetailCard';
import { MatchSmallCard } from '../component/MatchSmallCard';

export const TeamPage = () => {
	
	const [team, setTeam] = useState({matches: []});
	
	useEffect(
		() => {
			const fetchMatches = async () => {
				const response = await fetch('http://localhost:8090/team/Chennai%20Super%20Kings');
				const data = await response.json();
				console.log(data);
				setTeam(data);

			};
			fetchMatches();
			
		}, []	
	
	);
	
  return (
    <div className="TeamPage"> 
    	<h1> {team.teamName} </h1>
    	
    	 <MatchDetailCard match={team.matches[0]}/>
    	 
    	 {team.matches.slice(1).map(match => <MatchSmallCard match={match} />)}

    </div>
  );
}

//creating a state using useState, team is a state and using setTeam to populate state
// 	 call to useEffect   	 when component loads which is [] array, call fetchMatches, calls url and sets response
//use {team.teamName} JSX to render values
import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MatchDetailCard } from '../component/MatchDetailCard';
import { YearSelector } from '../component/YearSelector';
import './MatchPage.scss';


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
				
			}, [teamName, year]	
		
		);
	
	return (
			
    <div className="MatchPage">
    	<div className="year-selector"><h3> {teamName} matches in {year} </h3>
    	<YearSelector teamName={teamName} /></div>
    	<div className="match-detail">
    	{
    		matches.map(match => <MatchDetailCard key={match.id} teamName={teamName}  match={match} />)

    	}
    	</div>
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
 


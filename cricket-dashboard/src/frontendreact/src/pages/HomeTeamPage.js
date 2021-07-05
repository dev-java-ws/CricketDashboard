import { React, useEffect, useState } from 'react';
import { TeamTile } from '../component/TeamTile';
import './HomeTeamPage.scss';

export const HomeTeamPage = () => {
	
	const [teams, setTeams] = useState([]);
	useEffect(
		() => {
			const fetchAllTeams = async () => {
				const response = await fetch(`http://localhost:8090/team`);
				const data = await response.json();
				console.log(data);
				setTeams(data);

			};
			fetchAllTeams();
			
		}, []	
	
	);
	
	return (
    <div className="HomeTeamPage"> 
    	<div className="header-section"> 
    	    <h1 className="app-name"> Sports Dashboard </h1>
    	</div>
    	<h4>
    	<div className="team-grid">
    		{teams.map(team => <TeamTile teamName={team.teamName} /> )}
    	</div></h4>
    </div>
  );
}


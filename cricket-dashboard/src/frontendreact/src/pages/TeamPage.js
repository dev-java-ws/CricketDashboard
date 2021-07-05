import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MatchDetailCard } from '../component/MatchDetailCard';
import { MatchSmallCard } from '../component/MatchSmallCard';
import { PieChart } from 'react-minimal-pie-chart';
import { Link } from 'react-router-dom';

import './TeamPage.scss';

export const TeamPage = () => {
	
	const [team, setTeam] = useState({matches: []});
	const { teamName } = useParams();
	
	useEffect(
		() => {
			const fetchMatches = async () => {
				const response = await fetch(`http://localhost:8090/team/${teamName}`);
				const data = await response.json();
				console.log(data);
				setTeam(data);

			};
			fetchMatches();
			
		}, [teamName]	
	
	);
	
	if(!team || !team.teamName) {return <h1> Team Not Found </h1>}
 
	return (
    <div className="TeamPage"> 
    	<div className="team-name-section"> <h1 className="team-name"> {team.teamName} </h1> </div>
    	<div className="win-loss-section">
    		Wins/Losses
    		<PieChart
    		  data={[
    		    { title: 'Wins', value: team.totalWins, color: '#E38627' },
    		    { title: 'Losses', value: team.totalMatches-team.totalWins, color: '#C13C37' },
    		  ]}
    		/>;
    	</div>
    	<div className="match-detail-section">
    		<h3>Latest Matches</h3>
    		<MatchDetailCard teamName={team.teamName} match={team.matches[0]}/>
    	 </div>
    	 {team.matches.slice(1).map(match => <MatchSmallCard  teamName={team.teamName}  match={match} />)}
    	 <div>
    	    <Link to={`/team/${teamName}/matches/${process.env.REACT_APP_END_YEAR}`} >
    	    More
    	    </Link></div>
    </div>
  );
}

//creating a state using useState, team is a state and using setTeam to populate state
// 	 call to useEffect   	 when component loads which is [] array, call fetchMatches, calls url and sets response
//use {team.teamName} JSX to render values
    	 
   //to send to backend use react router http://localhost:3000/team/Chennai%20Super%20Kings 
    	 
    	//adding div for <h1> to add css class
         
    	 
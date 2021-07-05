import { React } from 'react';
import { Link } from 'react-router-dom';

export const YearSelector = ({teamName}) => {
    let years = [];
    const startYear = process.env.REACT_APP_START_YEAR;
    const endYear = process.env.REACT_APP_END_YEAR;
    
	for(let i = startYear; i <= endYear; i++){
		years.push(i);
	}
	
	return (
			<dl className="years-list">
				{ years.map(year => ( <di key={year}>
				  	<Link to={`/team/${teamName}/matches/${year}`} > {year}</Link>
				  </di>
				)
				)}
			</dl> 
		)
	}
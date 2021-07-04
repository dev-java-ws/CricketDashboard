/**
 * 
 */
package io.devjava.cricketdashboard.controller;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import io.devjava.cricketdashboard.model.Match;
import io.devjava.cricketdashboard.model.Team;
import io.devjava.cricketdashboard.repository.MatchRepository;
import io.devjava.cricketdashboard.repository.TeamRepository;

/**
 * Main Controller class - http://localhost:8090/team/Delhi%20Capitals 
 * 
 * 
 * @author devia
 *
 */
@RestController
@CrossOrigin // this annotation lets browser(react localhost:3000) call this domain(localhost:8090)
public class TeamController {

	@Autowired
	private TeamRepository TeamRepository;
	
	private MatchRepository matchRepository;  //or use autowired
	public TeamController(MatchRepository matchRepository) {
		this.matchRepository = matchRepository;
	}
	
	@GetMapping("/team/{teamName}")
	public Team getTeam(@PathVariable String teamName) {
		Team team = this.TeamRepository.findByTeamName(teamName);
		//Pageable pageable = PageRequest.of(0, 4); this has to be moved to repository class and rename
		//List<Match> matches = this.matchRepository.getByTeam1OrTeam2OrderByDateDesc(teamName, teamName, pageable); //this return everything, to get top 4?
		List<Match> matches = this.matchRepository.findLatestMatchesByTeam(teamName, 4);
		team.setMatches(matches);
		return team;
	}
	
	@GetMapping("/team/{teamName}/matches") //property its queried for is yr.. it can be with another prop later
	public List<Match> getMatchesForTeam(@PathVariable String teamName, @RequestParam int year) {
		LocalDate startDate = LocalDate.of(year, 1, 1);
		LocalDate endDate = LocalDate.of(year + 1, 1, 1);
		
		List<Match> matches = this.matchRepository.getMatchesByTeamBetweenDates(teamName, startDate, endDate);
		
		/*
		 * List<Match> matches = this.matchRepository.
		 * getByTeam1AndDateBetweenOrTeam2AndDateBetweenOrderByDateDesc( teamName,
		 * startDate, endDate, teamName, startDate, endDate);
		 */
		return matches;
	}
	
}


//https://spring.io/guides/gs/batch-processing/
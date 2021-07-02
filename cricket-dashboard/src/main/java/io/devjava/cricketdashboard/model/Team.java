/**
 * 
 */
package io.devjava.cricketdashboard.model;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Transient;

/**
 * Team table has data -
 * Team [teamName=Deccan Chargers, totalMatches=75, totalWins=29]
 * Team [teamName=Chennai Super Kings, totalMatches=178, totalWins=106]
 * 
 * @author devia
 *
 */

@Entity
public class Team {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;

	private String teamName;
	private long totalMatches;
	private long totalWins;
	
	public Team() {
		super();
	}
	public Team(String teamName, long totalMatches) {
		this.teamName = teamName;
		this.totalMatches = totalMatches;
	}
	
	//Adding this method to get list of N matches played by this team
	@Transient  //doesnt persist
	private List<Match> matches;
	
	
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getTeamName() {
		return teamName;
	}

	public void setTeamName(String teamName) {
		this.teamName = teamName;
	}

	public long getTotalMatches() {
		return totalMatches;
	}

	public void setTotalMatches(long totalMatches) {
		this.totalMatches = totalMatches;
	}

	public long getTotalWins() {
		return totalWins;
	}

	public void setTotalWins(long totalWins) {
		this.totalWins = totalWins;
	}
	@Override
	public String toString() {
		return "Team [teamName=" + teamName + ", totalMatches=" + totalMatches + ", totalWins=" + totalWins + "]";
	}
	public List<Match> getMatches() {
		return matches;
	}
	public void setMatches(List<Match> matches) {
		this.matches = matches;
	}

	
}

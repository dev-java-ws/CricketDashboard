/**
 * 
 */
package io.devjava.cricketdashboard.repository;

import java.util.List;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.CrudRepository;

import io.devjava.cricketdashboard.model.Match;

/**
 * @author devia
 *
 */
public interface MatchRepository extends CrudRepository<Match, Long> {
      
	//List<Match> getByTeam1(String teamName); to search on team1 column 
	//List<Match> getByTeam1OrTeam(String teamName1, String teamName2); to search on two column
	//List<Match> getByTeam1OrTeam2OrderByDateDesc(String teamName1, String teamName2); to search and order by date descending
	List<Match> getByTeam1OrTeam2OrderByDateDesc(String teamName1, String teamName2, Pageable pageable); //to search and order by date desc, but to return the top 4 rows etc, use JPQL or use page request in controller.
	
	default List<Match> findLatestMatchesByTeam(String teamName, int count) {
		return getByTeam1OrTeam2OrderByDateDesc(teamName, teamName, PageRequest.of(0, count));
	}
}

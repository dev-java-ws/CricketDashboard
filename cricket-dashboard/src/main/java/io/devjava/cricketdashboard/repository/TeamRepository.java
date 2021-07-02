/**
 * 
 */
package io.devjava.cricketdashboard.repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import io.devjava.cricketdashboard.model.Team;

/**
 * Interface for CRUD operations on repository.
 *
 * @author devia
 *
 */
public interface TeamRepository extends CrudRepository<Team, Long> {

	Team findByTeamName(String teamName) ;
}

	

import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import './App.css';

function MatchesList({ matches }) {
  const [selectedMatch, setSelectedMatch] = useState(null);

  // Ordre de priorité détaillé des compétitions
  const leaguePriority = {
    "UEFA Champions League": 1,
    "UEFA Europa League": 2,
    "UEFA Conference League": 3,
    "Premier League": 4,
    "LaLiga": 5,
    "Serie A": 6,
    "Bundesliga": 7,
    "Ligue 1": 8,
    "Saudi Pro League": 9,
    "Super Lig": 10,
    "Primeira Liga": 11,
    "Eredivisie": 12,
    "Belgian Pro League": 13,
    "Copa Libertadores": 14,
    "Copa Sudamericana": 15,
    "CAF Champions League": 16,
    "AFC Champions League": 17,
    "World Cup": 18,
    "European Championship": 19,
    "Copa America": 20,
    "Africa Cup of Nations": 21,
    "Asian Cup": 22,
    "FA Cup": 23,
    "Copa del Rey": 24,
    "Coppa Italia": 25,
    "DFB Pokal": 26,
    "Coupe de France": 27
  };

  // Grouper et trier les matches
  const groupedAndSortedMatches = matches.reduce((acc, match) => {
    const leagueId = match.league.id;
    if (!acc[leagueId]) {
      acc[leagueId] = {
        league: match.league,
        matches: [],
        priority: leaguePriority[match.league.name] || 999
      };
    }
    acc[leagueId].matches.push(match);
    return acc;
  }, {});

  // Convertir en tableau et trier par priorité
  const sortedGroups = Object.values(groupedAndSortedMatches)
    .sort((a, b) => a.priority - b.priority);

  const handleMatchClick = (match) => {
    console.log("Match clicked:", match);
    setSelectedMatch(match);
  };

  return (
    <div className="matches-list">
      {sortedGroups.map((group) => (
        <div key={group.league.id} className="league-group">
          <div className="competition">
            <div className="competition-header">
              <img 
                src={group.league.logo} 
                alt={group.league.name} 
                className="league-logo"
              />
              <img 
                src={group.league.flag} 
                alt={`${group.league.country} flag`} 
                className="country-flag"
              />
              <span className="league-name">{group.league.name}</span>
            </div>
          </div>

          {group.matches.map((match) => (
            <div key={match.fixture.id} className="match-card" onClick={() => handleMatchClick(match)}>
              <div className="match-info">
                <div className="team-container">
                  <img 
                    src={match.teams.home.logo} 
                    alt={match.teams.home.name} 
                    className="team-logo"
                  />
                  <span className="equipe">{match.teams.home.name}</span>
                </div>
                
                <div className="score">VS</div>
                
                <div className="team-container">
                  <span className="equipe">{match.teams.away.name}</span>
                  <img 
                    src={match.teams.away.logo} 
                    alt={match.teams.away.name} 
                    className="team-logo"
                  />
                </div>
              </div>
              
              <div className="match-time">
                {new Date(match.fixture.date).toLocaleTimeString()}
              </div>
            </div>
          ))}
        </div>
      ))}

      {selectedMatch && (
        <div className="video-modal">
          <div className="video-container">
            <button className="close-video" onClick={() => setSelectedMatch(null)}>
              ✕
            </button>
            <ReactPlayer
              url="http://mo3ad.xyz:80/play/0g1pF61pK2eO6wdlWCDN27K0d2BtXMk2o3F68hu7A5I/ts"
              playing
              controls
              width="100%"
              height="100%"
              config={{
                file: {
                  forceHLS: true,
                  attributes: {
                    crossOrigin: "anonymous"
                  }
                }
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default MatchesList; 
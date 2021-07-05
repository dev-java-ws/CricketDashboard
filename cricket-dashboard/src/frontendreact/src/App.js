import './App.scss';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {TeamPage} from './pages/TeamPage';
import {MatchPage} from './pages/MatchPage';
import {HomeTeamPage} from './pages/HomeTeamPage';

function App() {
  return (
    <div className="App">
    <Router>
    	<Switch>
	    	<Route path="/team/:teamName/matches/:year">
				<MatchPage />
			</Route>
	    	
			<Route path="/team/:teamName">
	    		<TeamPage />
	    	</Route>
	    	
	    	<Route path="/">
    		<HomeTeamPage />
    		</Route>

		</Switch>
    </Router>
    </div>
  );
}

export default App;

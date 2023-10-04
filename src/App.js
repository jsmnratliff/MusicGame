import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; 
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './HomePage';
import HighScoresPage from './HighScoresPage'; // Create this component
import GamePage from './GamePage'; // Create this component

ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);


function App() {
    return (
        <Router>
          <div className="navbar">
            <Link to="/">Home</Link>
            <Link to="/high-scores">High Scores</Link>
            <Link to="/game">Game</Link>
          </div>
          <Switch>
            <Route path="/high-scores" component={HighScoresPage} />
            <Route path="/game" component={GamePage} />
            <Route path="/" component={HomePage} />
          </Switch>
        </Router>
      );
    }
    
    export default App;
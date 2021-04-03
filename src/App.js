import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Nav from './components/Nav';
import Home from './components/Home';
import PlantsContainer from './containers/PlantsContainer';

function App() {
  return (
    <Router>
      <div className="">
        <Nav />
        <Route exact path='/' component={Home} />
        <Route path='/plants' component={PlantsContainer} />
      </div>
    </Router>
  );
}

export default App;

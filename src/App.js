import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './components/Home';
import PlantsContainer from './containers/PlantsContainer';

function App() {
  return (
    <Router>
      <div className="">
        <Nav />
        <Route exact path='/' component={Home} />
        <Route path='/plants' component={PlantsContainer} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;

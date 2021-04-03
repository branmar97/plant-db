import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './components/Home';
import PlantsContainer from './containers/PlantsContainer';
import Plant from './components/Plant';

function App() {
  return (
    <Router>
      <div className="">
        <Nav />
        <Route exact path='/' component={Home} />
        <Route exact path='/plants' component={PlantsContainer} />
        <Route path='/plants/:id' component={Plant} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;

import React, { Component } from 'react'
import { 
  BrowserRouter as Router, 
  Switch, 
  Route,
  Link,
} from 'react-router-dom'
import { Home } from './Home'
import { Jobs } from './Jobs'
import { Leads } from './Leads'
import { Materials } from './Materials'
import { Quotes } from './Quotes'
import { Vendors } from './Vendors'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div className="container">
            <nav>
              <div className="NavMenu">
                <div className="NavButton"><Link to='/'>Home</Link></div>
                <div className="NavButton"><Link to='/leads'>Leads</Link></div>
                <div className="NavButton"><Link to='/quotes'>Quotes</Link></div>
                <div className="NavButton"><Link to='/jobs'>Jobs</Link></div>
                <div className="NavButton"><Link to='/materials'>Materials</Link></div>
                <div className="NavButton"><Link to='/vendors'>Vendors</Link></div>
              </div>
            </nav>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/jobs" component={Jobs} />
              <Route exact path="/leads" component={Leads} />
              <Route exact path="/materials" component={Materials} />
              <Route exact path="/quotes" component={Quotes} />
              <Route exact path="/vendors" component={Vendors} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

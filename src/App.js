import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// components
import Events from './components/Events';
import Buy from './components/Buy';
import Tickets from './components/Tickets';
import Error404 from './components/Error404'
import './App.css';

function App() {
    return (
        <div>
            <div style={{backgroundColor: '#231F42', width: '400px', height: '650px'}}>
                <Router>
                    <Switch>
                        <Route path="/" component={Events} exact/>
                        <Route path="/buy/event-:id" component={Buy} />
                        <Route path="/ticket/event-:id" component={Tickets} />
                        <Route component={Error404} />
                    </Switch>
                </Router>
            </div>
        </div>
    );
}

export default App;

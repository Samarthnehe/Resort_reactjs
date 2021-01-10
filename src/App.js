import './App.css';

import Home from './pages/home';
import Room from './pages/room';
import SingleRoom from './pages/singleRoom';
import Error from './pages/error';
import Navbar from './component/Navbar';

import {Route,Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/room' exact component={Room}/>
        <Route path='/room/:slug' exact component={SingleRoom}/>
        <Route  component={Error}/>
      </Switch>
      
    </div>
  );
}

export default App;

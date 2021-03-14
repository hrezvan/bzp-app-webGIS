import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'leaflet/dist/leaflet.css';
import {Redirect, Route , Switch} from 'react-router-dom';
import Mappage from './pages/mapPage';
import NotFound from './pages/not-found/notFound';
import Homepage from './pages/homePage';

function App() {
  return (
    <Switch>
      <Route path='/home' component={Homepage} />
      <Route path='/map' component={Mappage} />
      {/* <Route path='/map' component={SideDrawer} /> */}
      <Route path='/' exact component={Homepage} />
      <Route path='/not-found' component={NotFound} />
      <Redirect to='/not-found' />
    </Switch>
  );
}

export default App;

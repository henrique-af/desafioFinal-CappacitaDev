
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import SimpleBottomNavigation from './components/MainNav';
import Login from './pages/Login/Login';
import Populares from './pages/Populares/Populares';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Container>
          <Switch>
            <Route path='/' component={Populares} exact />
            <Route path='/login' component={Login} exact />
          </Switch>
        </Container>
      </div>
      <SimpleBottomNavigation />
    </BrowserRouter>
  );
}

export default App;

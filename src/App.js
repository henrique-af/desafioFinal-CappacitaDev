
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import SimpleBottomNavigation from './components/NavBar/NavBar';
import Login from './pages/Login/Login';
import Pesquisar from './pages/Pesquisar/Pesquisar'
import Populares from './pages/Populares/Populares';
import TodosFilmes from './pages/TodosFilmes/TodosFilmes';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Container>
          <Switch>
            <Route path='/' component={Populares} exact />
            <Route path='/pesquisar' component={Pesquisar} />
            <Route path='/login' component={Login} />
            <Route path='/todos-filmes' component={TodosFilmes} />
          </Switch>
        </Container>
      </div>
      <SimpleBottomNavigation />
    </BrowserRouter>
  );
}

export default App;

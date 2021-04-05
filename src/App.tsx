import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import AdminPage from './admin/AdminPage';
import './App.css';
import CharacterDetail from './characters/CharacterDetail';
import UpdateCharacter from './characters/UpdateCharacter';
import Header from './header/Header';
import HomePage from './home/HomePage';

function App() {
  return (
    <div className='App'>
      <Header />
      <Router>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/detail/:id' component={CharacterDetail}/>
          <Route exact path='/admin' component={AdminPage} />
          <Route exact path='/update/:id' component={UpdateCharacter} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
